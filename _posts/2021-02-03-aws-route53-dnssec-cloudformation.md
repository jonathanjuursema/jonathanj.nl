---
title:          Enabling DNSSEC on AWS Route 53 using CloudFormation  
date:           2021-02-03
layout:         post
---

At the time of writing this post, AWS has [recently announced DNSSEC support for Hosted Zones in Route 53](https://aws.amazon.com/about-aws/whats-new/2020/12/announcing-amazon-route-53-support-dnssec/). Even though I was waiting for this feature, I had to wait a little in order to start using it because of some [issues that still had to be resolved](https://forums.aws.amazon.com/thread.jspa?threadID=332779). However, by now, this domain is also running DNSSEC on Route 53. While setting this up I missed some guidance with regards to setting the whole thing up via CloudFormation, so in this post I will provide some examples to get up and running quickly!

First, let's take a quick look at the [set-up guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html). Basically we need to:

1. Set-up a KMS key that will be used to sign your Route 53 records. (You can use 1 KMS key for multiple Hosted Zones.)
2. Enable DNSSEC on a hosted zone using that KMS key.

If we dig a little bit deeper we find there are a few [gotchas with regard to the KMS key](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-cmk-requirements.html):

* The key should be in us-east-1 (N. Virginia). Route 53 is a global service, but KMS is regional. This is similar to CloudFront (global service) and ACM (regional, but certificates for CloudFront should be in us-east-1).
* The key should be *asymmetric* and set to a specific key spec and purpose.
* We need to take into account some specific [KMS key policies for this use-case](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-managing-permissions.html#KMS-key-policy-for-DNSSEC).

Okay, on to the actual examples. Please note that these examples do *not* take into account monitoring, and assume you deploy all CloudFormation templates using a root-account. You might need to make changes to accommodate to your particular IAM set-up.

The following CloudFormation template will deploy the required KMS key (remember, you can use one key to sign multiple Hosted Zones). Remember that this template should be deployed in _us-east-1_!

<div class="card code-card">
{% highlight yaml %}
{% raw %}
---
AWSTemplateFormatVersion: 2010-09-09
Description: DNSSEC KMS Key
Resources:

  DNSSECKMSKey:
    Type: AWS::KMS::Key
    DeletionPolicy: Retain
    UpdateReplacePolicy: Delete
    Properties:
      Description: DNSSEC KMS Key
      Enabled: true
      KeySpec: ECC_NIST_P256
      KeyUsage: SIGN_VERIFY
      KeyPolicy:
        Version: 2012-10-17
        Id: DNSSEC
        Statement:
          - Sid: AllowKeyAdministration
            Effect: Allow
            Principal:
              AWS:
                - !Sub 'arn:aws:iam::${AWS::AccountId}:root'
            Action:
              - 'kms:Create*'
              - 'kms:Describe*'
              - 'kms:Enable*'
              - 'kms:List*'
              - 'kms:Put*'
              - 'kms:Update*'
              - 'kms:Revoke*'
              - 'kms:Disable*'
              - 'kms:Get*'
              - 'kms:Delete*'
              - 'kms:TagResource'
              - 'kms:UntagResource'
              - 'kms:ScheduleKeyDeletion'
              - 'kms:CancelKeyDeletion'
              - 'kms:Sign' # Important!
            Resource: '*'
          - Sid: Allow Route 53 DNSSEC Service
            Effect: Allow
            Principal:
              Service: dnssec-route53.amazonaws.com
            Action:
              - kms:DescribeKey
              - kms:GetPublicKey
              - kms:Sign
            Resource: "*"
          - Sid: Allow Route 53 DNSSEC to CreateGrant
            Effect: Allow
            Principal:
              Service: dnssec-route53.amazonaws.com
            Action:
              - kms:CreateGrant
            Resource: "*"
            Condition:
              Bool:
                kms:GrantIsForAWSResource: true
{% endraw %}
{% endhighlight %}
</div>
 
Take not of the KeySpec and KeyUsage attributes, which may not be familiar to you (they weren't to me!). Also, note that both Route53 *and* the deployment user (the root-account in my case) need access to these three permissions:

* kms:DescribeKey
* kms:GetPublicKey
* kms:Sign

The default `AllowKeyAdministration` statement (which gives permission to the root-account) does not include that last one by default, so we have to add that one as well.

Next, you can sign your existing Hosted Zone stacks by adding an `AWS::Route53::KeySigningKey` and an `AWS::Route53::HostedZone` resource as follows:

<div class="card code-card">
{% highlight yaml %}
{% raw %}
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Route53 for jonathanj.nl'

Resources:

  HostedZone:
    Type: AWS::Route53::HostedZone
    Properties:
      Name: jonathanj.nl
    DeletionPolicy: Delete

  HostedZoneDNSSEC:
    DependsOn: HostedZoneDNSSECSigningKey # Important!
    Type: AWS::Route53::DNSSEC
    Properties:
      HostedZoneId: !Ref HostedZone

  HostedZoneDNSSECSigningKey:
    Type: AWS::Route53::KeySigningKey
    Properties:
      HostedZoneId: !Ref HostedZone
      KeyManagementServiceArn: arn:aws:kms:us-east-1:012345678901:key/key-arn
      Name: kms_key
      Status: ACTIVE
{% endraw %}
{% endhighlight %}
</div>

Here we have to note that CloudFormation doesn't natively "know" that before enabling DNSSEC signing, it has to wait for the KSK resource. So we need to force that wait using a `DependsOn` attribute. Furthermore, my personal Route53 stack is in eu-west-1, so I can't pass on my KMS key ARN using an SSM parameter. If your Hosted Zone stacks are in us-east-1, you might want to add an SSM parameter to the first example and read it out in the second.

And with that, this domain now supports DNSSEC in Route53, deployed via CloudFormation. Hope that helps you!