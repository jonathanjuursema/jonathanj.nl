// Taken and adapted from https://andrewlock.net/simple-obfuscation-of-email-addresses-using-javascript/

emlObfuscationExecute()

function encodeEmail(email, key) {
    // Hex encode the key
    let encodedKey = key.toString(16);

    // ensure it is two digits long
    let encodedString = emlObfuscationMake2DigitsLong(encodedKey);

    // loop through every character in the email
    for (let n = 0; n < email.length; n++) {

        // Get the code (in decimal) for the nth character
        let charCode = email.charCodeAt(n);

        // XOR the character with the key
        let encoded = charCode ^ key;

        // Hex encode the result, and append to the output string
        let value = encoded.toString(16);
        encodedString += emlObfuscationMake2DigitsLong(value);
    }
    return encodedString;
}

function decodeEmail(encodedString) {
    // Holds the final output
    let email = "";

    // Extract the first 2 letters
    let keyInHex = encodedString.substr(0, 2);

    // Convert the hex-encoded key into decimal
    let key = parseInt(keyInHex, 16);

    // Loop through the remaining encoded characters in steps of 2
    for (let n = 2; n < encodedString.length; n += 2) {

        // Get the next pair of characters
        let charInHex = encodedString.substr(n, 2)

        // Convert hex to decimal
        let char = parseInt(charInHex, 16);

        // XOR the character with the key to get the original character
        let output = char ^ key;

        // Append the decoded character to the output
        email += String.fromCharCode(output);
    }
    return email;
}

function emlObfuscationMake2DigitsLong(value) {
    return value.length === 1
        ? '0' + value
        : value;
}

function emlObfuscationExecute() {
    let allElements = document.getElementsByClassName("eml-protected");

    for (let i = 0; i < allElements.length; i++) {
        updateAnchor(allElements[i])
    }

    function updateAnchor(el) {
        let encoded = el.getAttribute('eml-encoded');
        let decoded = decodeEmail(encoded);

        let replace = el.getAttribute('eml-replace').split(",");
        for (let r in replace) {
            switch (replace[r]) {
                case 'href':
                    el.href = 'mailto:' + decoded;
                    break;
                case 'html':
                    el.textContent = decoded;
                    break;
                default:
                    console.log("Unrecognized de-obfuscation target: " + replace[r])
            }
        }
    }
}