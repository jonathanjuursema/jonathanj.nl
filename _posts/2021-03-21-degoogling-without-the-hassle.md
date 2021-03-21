---
title:          DeGoogling without the hastle.
date:           2021-03-21
layout:         post
---

For a long time I have lived happily in the Google ecosystem. They offer all the services I need, they're neatly integrated and they work great. However, over time I grew more and more uncomfortable. Not only with Google itself (remember "don't be evil"?), but also with the fact that I was entrusting both all of my digital information and all of my productivity to a single company. In this post I'd like to set out how I went about DeGoogling and what works for me.

If you're just interested in what services I replaced Google's with, just skip ahead. If you want to read some of the rationale, however, stay with me for another paragraph or two.

I don't want to spend this blog post outlining why I dislike Google. In fact, as you will figure out down below I still use products from companies that I dislike just as much. For me personally the goals has not necessarily been to stop using services from "big tech". I've read a lot of guides where people were recommending many great alternatives, many of them open source. Most of these, however, were either unpleasant to use, not well maintained or did not come with synchronisation between phone and desktop. In this search I figured out that the most important aspects of a service, for me, are (in no particular order):

- **Avoid one single company.** I don't want to put all my eggs in one basket. I'm not uncomfortable using cloud services, I just don't want to be depending on one particular company for my entire digital life.
- **Privacy.** Privacy is important to me (and I can be very annoying to companies that disregard my privacy). However, sometimes you need to sacrifice some privacy for convenience. Especially when you consider the previous point, the impact on your privacy of using "big tech" for certain service is not that bad.
- **Cloud services.** As much as I like tinkering, self-hosted solutions are not a requirement. I usually start out with self-hosted solutions to learn, but at a certain point I just want things tow work. I've hosted my own e-mail server for a time, but right now I'm really happy just using a service for that, so I don't have to worry about it.
- **Subscriptions.** If it's free, you're very likely the product. I don't mind paying for services if they're good.
- **Integration.** For me, compatibility between apps, services and operating systems is important. Mostly because of the next point.
- **Usability.** I value my money as much as the next guy, and I support the open source community. But often a paid, closed-source or hosted service just works, looks or integrates better.

With those considerations out of the way, let's get to it. Links are not referral links unless explicitly mentioned, and shouldn't contain trackers.

Quickly jump to:
* [Gmail](#gmail)
* [Android](#android)
* [Google Drive](#drive)
* [Google Messaging Apps](#messaging)
* [YouTube](#youtube)
* [Other](#other)

### <a name="gmail"></a> Gmail, Google Calendar and Google Contacts
##### Alternative: [Fastmail](https://www.fastmail.com)
Gmail is one of the first services I ditched. I ran my own e-mail server for a while, but after some late nights fixing issues (uptime for e-mail seems to be important these days) I wanted to move to a managed solution.

I spent some time searching and explored a number of services that were lacking the features I was looking for: ProtonMail, Outlook, iCloud Mail and Tutanota. I finally found [Fastmail](https://www.fastmail.com). Fastmail has all features I personally like: a great webmail interface, SMTP and IMAP. But also support for a lot of nerd features such as snoozing e-mails, custom e-mail domains, catch-all aliases, flexible sending identities that also support external SMTP servers and much more. They also offer support for contacts and calendars: their calendar UI and functionality rivals that of Google Calendar and their contacts support is fine.

E-mail is fully compatible with IMAP, POP and SMTP (in fact, they also [contribute back to these protocols](https://fastmail.blog/2019/08/16/jmap-new-email-open-standard/)) and their calendars and contacts use CalDav and CardDav under the hood. Importing mail, contacts and calendars into iOS is as easy as [importing a profile](https://www.fastmail.help/hc/en-us/articles/1500000279941-Set-up-iOS-devices-iOS-12-) and syncing contacts and calendars to and from Android can be achieved using apps like [DAVx5](https://www.davx5.com/). I've used both with Fastmail and I've never been less than completely satisfied. They are an Australian company (their servers are in the US, however) founded in 1999. As far as I can tell, they [take their privacy and security serious](https://www.fastmail.com/privacy-and-security/).

Fastmail is a **[paid service](https://www.fastmail.com/pricing/)** starting at $3/month (excluding taxes) for 2GB of e-mail. If you want 30GB of e-mail and the nerd features I mentioned above, you'll have to fork over $5/month. As far as I can tell these subscriptions is how they make their money, you're not the product, and they don't show ads or sell your data. I've been paying the latter happily for over a year now. None of the previous links are affiliate links and I'm advocating this service only because I genuinely love it, but if you want you can use [this](https://ref.fm/u22073200) link to get 10% off your first year and give me some credits towards my next bill as well.

### <a name="android"></a> Android
##### Alternative: [iOS](https://www.apple.com/iphone/)
I've had Android phones since smartphones became a thing (HTC Magic; Huawei U8800 IDEOS X5; OnePlus 1, 3 and 6) and besides the stock ROMs I've been trying custom ROMs such as LineageOS. Even though these should be a little more privacy friendly, I continued to have stability and battery issues. (This is in no way to discredit their maintainers. They offer their time for free and support a huge range of devices.) And, on Android I just can't go without the Google Play Store without risking security issues with apps like my banking app. With Windows Phones no longer being a thing, I recently bought my first iPhone.

Apple's hardware is undoubtedly more expensive, definitely has its own agonizing issues (why can't I just set an mp3 as ringtone?) and the company isn't a charity either. However, their stance on privacy is subjectively a lot better, and the Apple tax gets you an average of 5 years of security _and_ major feature updates improving the lifespan and decreasing the environmental impact of the gadget. On Android you should be happy to get 2+ years of support. If you make use of the free included iCloud subscription (5GB) you should have enough cloud storage to store back-ups of most of the relevant user-data that is not media (read on!) so your stuff is backed up to boot. As far as alternatives to Google's Android go, I consider iPhones a perfectly fine alternative.

As far as I can tell, Apple doesn't make use of (excessive) ads or data selling to make a profit. I believe they make back the cost of the extended software updates from the higher base-price of their iPhones and their margins from the App Store. If you disagree, I'd love to hear from you. Feel free to get in touch!

### <a name="drive"></a> Google Drive
##### Alternative: [NextCloud](https://nextcloud.com/) (self-hosted)
I'd been using Google Drive mostly because I was into the Google ecosystem. I have also used Dropbox as a student. Remember those [space races](https://blog.dropbox.com/topics/our-community/now-announcing-the-great-dropbox-space-race) that got you buttloads of free space? Since I like photography and could never bring myself to throw away those RAW image files I had been running a home NAS with about 6TB of storage for some time, just as a regular network drive. Since I was using [unRAID](https://unraid.net/), which has good Docker support, I had the opportunity to give self-hosed solutions a go.

Nextcloud is an open source and very feature-rich alternative to services like Google Drive and Dropbox. You can host a server yourself, but there are also commercial companies out there that offer hosted instances for you to use. It has all the features you would expect a storage service to have: mobile and desktop clients, file sharing links and dropbox functionality (as in, have people upload files to you using a unique link). It even offers federated sharing where you can share files and folders with users on other Nextcloud instances (which works simlar to sharing in Google Drive and Dropbox). Using their Android and iOS apps you can also back-up your media (photos and videos) to Nextcloud automagically, eliminating the need for Google Photos (Android) or iCloud (iOS). There are also plug-ins that provide functionality like Google Docs but I've personally never used that.

Nextcloud makes their profit from selling support and enterprise features to businesses. Community use of their product is free. As far as I can tell, they don't make use of ads or data selling.

##### Alternative: [Tresorit](https://tresorit.com/) (SaaS)
If you're not keen on self-hosted solutions and would rather use a true cloud solution, I've been considering [Tresorit](https://tresorit.com/). It's a swiss company and all their data is stored in the European Union. They make use of a [solid encryption scheme](https://tresorit.com/security/encryption) which, in theory, should mean that the company itself doesn't have access to your actual file contents (but consequently can also not help you restore your data if you loose your password). I personally have not used their service yet, but as far as I can tell it's as feature rich and easy to use as the likes of Dropbox. They even offer [a free, end-to-end encryption alternative to WeTransfer](https://send.tresorit.com/).

They're definitely [not cheap](https://tresorit.com/pricing). Personal accounts start at €8.33/month (billed yearly) for 500GB of storage. As far as I can tell, this is how they're making money. No ads, no data-selling. As mentioned, I haven't personally used this service, but as soon as I want to switch away from self-hosted Nextcloud, I'm assuming this is the service I'm going to use.

### <a name="messaging"></a> Google Hangouts, Allo, Duo, Android Messages
I haven't really used any of the Google messaging apps extensively, but I wanted to seize this opportunity to talk about messaging apps.

##### Alternative: [Telegram](https://telegram.org/)
At the moment my personal preferred chat app is Telegram. It doesn't use end-to-end encryption on group chats, and for one-on-one chats you'll need to enable it manually. However, I don't really mind that since this means that they store all messages in the cloud so you can access them, even though you've lost your phone. Remember, I'm also storing my e-mail on cloud servers. There's medical bills, financial statements and other sensitive stuff in there. I'm more concerned about that than about chats with friends.

The lack of default end-to-end encryption will (rightly so) be a concern for journalists, activists and political figures in oppressive regimes. But for my every-day communication this not something I worry about. In the rare case where I want to speak about something very sensitive, I always have to option of secret chats. It should be noted that Telegram relies on an [in-house encryption scheme](https://core.telegram.org/mtproto). However, that encryption scheme is open and well documented. Even though substantial bounties have been posted to break this encryption scheme, no one has yet been able to find any vulnerabilities in the scheme.  

Telegram is free. It currently runs on donations from the founder and [plans on starting to offer paid futures in 2021](https://t.me/durov/142) to generate revenue. According to Telegram, all existing features of Telegram will remain free to use.

##### Alternative: [WhatsApp](https://www.whatsapp.com/)
This is an example of a service I use, even though I thoroughly dislike the company offering it. I no longer use Facebook ([even though I squat my name](https://www.facebook.com/jonathan.juursema/)) and, by extension, Facebook Messenger. I'm also well aware that Facebook captures some personally identifiable metadata about my using WhatsApp. However, remember my considerations from the beginning? I'm okay with using WhatsApp for a number of reasons. First, as a citizen of the Netherlands, it's the _de facto_ standard. Touching the integration and usability consideration, **not** using causes a lot of inconveniences for me. But also, because I don't use any other Facebook service, I've accepted that WhatsApp collects some information about me. I believe that their end-to-end encryption is secure and they don't look at the message contents. If that means the analyze the metadata, so be it. Having said that, as soon as a substantial portion of people move to other chat apps, I have no reason to stick with WhatsApp and I'll probably no longer use that service.

WhatsApp is free. WhatsApp makes some money selling enterprise-features to businesses. However, WhatsApp probably makes most of their profit from linking the aforementioned metadata to Facebook profiles.

##### Alternative: [Signal](https://signal.org/en/)
Signal is an open-source non-profit chat app that makes use of a standard and open end-to-end encryption scheme. This app would be the better option for the aforementioned journalists, activists and politicians. For me, however, I find that there are too many inconveniences. I can't back-up chats, chats are not always properly synced between desktop and mobile, and the app does not always work the way I expect it to. It's a very secure and privacy-friendly app. But for me, it just doesn't strike the right balance between privacy and usability.

Signal is free. It currently runs on donations.

### <a name="youtube"></a> YouTube
YouTube is the only Google service that I frequently use that I have not yet found a good one-size-fits-all alternative for. People usually name Vimeo and Twitch as alternatives, but as far as I'm concerned it heavily depends on the kind of videos you go to YouTube for.

I managed to find alternatives for some of the YouTube channels I used to follow over there. [Floatplane Media](https://www.floatplane.com/) and [Watch Nebula](https://watchnebula.com/) are two alternative video streaming sites that a lot of the content I watched on YouTube is also available on. I am happily paying for a subscription for those platforms.

For the other YouTube channels and my "I just want to watch something random" sessions, I have not yet found an alternative. I disabled my search history on YouTube (but still have watch history enabled) and am usually logged in while watching YouTube videos.

If you want to continue using YouTube but are blocking ads and looking for a way to support channels you like: many of them have a Patreon page where you can donate a small amount each month. This doesn't cut you free from YouTube completely, but at least cuts Google out of the revenue stream.

Have a suggestion for a good alternative? Please reaech out!

### <a name="other"></a> Others
For many other Google services that are "just" Android apps, luckily there are some good alternatives. Note that for Android-integrated services your only bet is most likely to be the Apple equivalent.

##### Google Maps > Apple Maps
Let's begin with the fact that I still have Google Maps on my phone. It's set to have access to my location when the app is open, and even then, it may only have my rough location (city-level). I use Google Maps for finding information on nearby places and for looking up addresses. Even though there are alternatives, I have simply not yet found one that is as complete and good as Google Maps. 

However, for navigating I just use Apple Maps. It works just as great as Google Maps for this purpose. It works with Apple CarPlay in my car and hasn't steered me wrong yet. It looks to be [privacy-friendly enough](https://support.apple.com/en-gb/HT212039) for my purposes.

Apple Maps is free and is presumably paid for by revenue from product sales, the App Store and Apple subscriptions.

For people without an iPhone, my understanding goes that the Android and iOS apps for OpenStreetMap are also decent for navigation.

---

I'm hoping this list is useful for someone looking for alternatives to Google services without going to the extreme lengths of "doing it yourself". Have you found an even better solution? Has this list helped you? I'd love to hear it!