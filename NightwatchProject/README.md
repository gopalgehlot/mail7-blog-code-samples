# mail7-blog-code-samples

##About to initial understanding and run the project
--------------------------------------------------

##Here are some easy steps to start working on the test cases:

 1. Implementation for APIs in node.js.
 2. Download and install node.js.
 3. For writing code use Sublime, VS Code, WebStorm or Notepad++ (WebStorm is best).

> Commands to install the necessary modules:
------------------------------------------
 1. Go to the project path.
 2. Run the command to install necessary modules to run the project: npm install.
 3. Run the command to install nightwatch globally: npm install nightwatch -g

###Run the Test cases:
---------------------
##Run the whole test cases at once

 1. Run the command `node nightwatch.js`. it will
    execute all the test cases even in the sub-directories for the given
    environment server.
 2. Getting HTML report after completing whole tests
    Use the following command: `node nightwatch.js --reporter html-reporter.js`

##Run individual test cases**
 1. Go to the directory path in all the cases you want to execute i.e. `/test`
 2. Run the command `node nightwatch.js` it will execute all the test cases even in the
    sub-directories for the given environment server.
 3. Example command: `node nightwatch.js --test test\Auth0_SocialLogin`, it will run all cases listed Auth0_Sociallogin.js
