let elements = require('./elementSelector.js');
var credentials = require('./credentials.js');
module.exports = {
    '@tags': ['Auth0SocialLogin'],

    "Verify Login in Auth0 with Google": function (browser, done) {
        browser.url(elements.auth0URL);
        browser.waitForElementVisible(elements.google.loginButton, 20000, "Auth0 login page should visible.");
        browser.click(elements.google.loginButton);
        browser.setValue(elements.google.emailLocator, [credentials.google.email, browser.Keys.ENTER]);
        browser.waitForElementVisible(elements.google.passwordLocator, 20000, "Password field should Visible");
        browser.setValue(elements.google.passwordLocator, [credentials.google.password, browser.Keys.ENTER]);
        browser.waitForElementVisible(elements.afterLoginElement, 20000, "Auth0 login with Google success");
        browser.end(done);
    },

    "Verify Login in Auth0 with Github": function (browser, done) {
        browser.url(elements.auth0URL);
        browser.waitForElementVisible(elements.github.loginButton, 20000, "Auth0 login page should visible.");
        browser.click(elements.github.loginButton);
        browser.waitForElementVisible(elements.github.emailLocator, 20000, "Email and Password field should Visible");
        browser.setValue(elements.github.emailLocator, credentials.github.email);
        browser.setValue(elements.github.passwordLocator, [credentials.github.password, browser.Keys.ENTER]);
        browser.waitForElementVisible(elements.afterLoginElement, 20000, "Auth0 login with Github success.");
        browser.end(done);
    },

    "Verify Login in Auth0 with Linkedin": function (browser, done) {
        browser.url(elements.auth0URL);
        browser.waitForElementVisible(elements.linkedin.loginButton, 20000, "Auth0 login page should visible.");
        browser.click(elements.linkedin.loginButton);
        browser.waitForElementVisible(elements.linkedin.emailLocator, 20000, "Email and Password field should Visible");
        browser.setValue(elements.linkedin.emailLocator, credentials.linkedin.email);
        browser.setValue(elements.linkedin.passwordLocator, [credentials.linkedin.password, browser.Keys.ENTER]);
        browser.waitForElementVisible(elements.afterLoginElement, 20000, "Auth0 login with LinkedIn success");
        browser.end(done);
    },

    "Verify Login in Auth0 with Microsoft": function (browser, done) {
        browser.url(elements.auth0URL);
        browser.waitForElementVisible(elements.microsoft.loginButton, 20000, "Auth0 login page should visible.");
        browser.click(elements.microsoft.loginButton);
        browser.waitForElementVisible(elements.microsoft.emailLocator, 20000, "Email and Password field should Visible");
        browser.setValue(elements.microsoft.emailLocator, [credentials.microsoft.email, browser.Keys.ENTER]);
        browser.setValue(elements.microsoft.passwordLocator, [credentials.microsoft.password, browser.Keys.ENTER]);
        browser.click(elements.microsoft.signInButton);
        browser.waitForElementVisible(elements.afterLoginElement, 20000, "Auth0 login with Microsoft success");
        browser.end(done);
    }

};
