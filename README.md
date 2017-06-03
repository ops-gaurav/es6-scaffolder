# Scaffolder
#### Introduction
Scaffolder is a nodejs application structure builder based on the best design pattern approach. The scaffolder is basically used to scaffold the basic nodejs apps with ES6 feature. The scaffolder uses the babel engine to to run nodejs code in ES6 format.

#### Installation
1. Use the following command to install scaffolder CLI tool in your system.<br/>
`npm install -g es6-scaffolder`
2. After it finishes installation, use the following command to start the application.<br/>
    `scaffold`
3. The menu will be presented to you with the available options. Choose the desired builder and then the scaffolder will setup the project structure for you.

#### Running or Deployment
Scaffolder does all the configurations for you, like installing dependencies. All you need to do is to go to your folder and type
`npm start`
to start the project.

#### Commands and arguments
With the <b>1.0.44</b> and prior updates of es6-scaffolder, the new option of the command line arguments has been introduced. The following commands are available as of <b>es6-scaffolder@1.0.44</b>
* `scaffold version` to get the version of scaffolder
* `scaffold check-update` to check if there is new version available.
* `scaffold update` to update to the latest version.

>  
If you are running es6-scaffold older than <b>1.0.44 </b>, then you have to remove it by using `npm uninstall -g es6-scaffolder` and then install it using `npm install -g es6-scaffolder`. This will update your es6-scaffolder to the latest version.

> es6-scaffolder is active right now, so always keep checking for the latest updates.

#### Currently supported scaffolds
* NodeJS - Express Scaffold with ES6
* NodeJS - Express - Angular Scaffold with ES6
* Angular2 - Webpack - Typescript Scaffold

> Now support for Angular 2 with webpack
you can respective documentations in the cloned scaffolds README.md files
