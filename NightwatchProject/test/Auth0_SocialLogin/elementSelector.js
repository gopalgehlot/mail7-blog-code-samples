/**
 * Created by KuldeepChhipa on 26/05/2020.
 */

module.exports = {
    auth0URL: "https://auth0.com/auth/login",
    afterLoginElement: "#search-wrapper",
    google: {
        loginButton: "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div.auth0-lock-widget-container > div > div > div.auth0-lock-content-wrapper > div:nth-child(2) > div > div > div > div > div > div > div > div > div.auth-lock-social-buttons-pane > div > button:nth-child(2)",
        emailLocator: "#identifierId",
        passwordLocator: "input[name='password']"
    },
    github: {
        loginButton: "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div.auth0-lock-widget-container > div > div > div.auth0-lock-content-wrapper > div:nth-child(2) > div > div > div > div > div > div > div > div > div.auth-lock-social-buttons-pane > div > button:nth-child(1)",
        emailLocator: "#login_field",
        passwordLocator: "#password"
    },
    linkedin: {
        loginButton: "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div.auth0-lock-widget-container > div > div > div.auth0-lock-content-wrapper > div:nth-child(2) > div > div > div > div > div > div > div > div > div.auth-lock-social-buttons-pane > div > button:nth-child(3)",
        emailLocator: "#username",
        passwordLocator: "#password"
    },
    microsoft: {
        loginButton: "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div.auth0-lock-widget-container > div > div > div.auth0-lock-content-wrapper > div:nth-child(2) > div > div > div > div > div > div > div > div > div.auth-lock-social-buttons-pane > div > button:nth-child(4)",
        emailLocator: "#i0116",
        passwordLocator: "#i0118",
        signInButton: "#idSIButton9"
    }
}