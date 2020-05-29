let elements = require('./elementSelector.js');
let Chance = require('chance');
let chance = new Chance();
let email = chance.email({ domain: "mail7.io" });
let firstName = chance.first();

module.exports = {
    '@tags': ['Landing_form_Automation'],

    "Verify Landing form of Mailchimp": function (browser, done) {
        console.log("email", email + '\n' + "FirstName", firstName);
        browser.url(elements.pageURL);
        browser.waitForElementVisible(elements.landingForm.emailLocator, 20000, "Mailchimp Landing form should visible.");
        browser.setValue(elements.landingForm.emailLocator, email);
        browser.setValue(elements.landingForm.firstNameLocator, firstName);
        browser.click(elements.landingForm.subscribeButton)
        browser.waitForElementVisible(elements.landingForm.successMessageLocator, 20000, "Success message should Appear.");
        browser.getText(elements.landingForm.successMessageLocator, function (message) {
            browser.assert.equal(message.value, "Success! You've been added to the audience.");
        })
        browser.end(done);
    }
}
