# Scaffolder
[![npm](https://img.shields.io/npm/dt/es6-scaffolder.svg)](https://www.npmjs.com/package/krypt-master) [![GitHub stars](https://img.shields.io/github/stars/sharma02gaurav/es6-scaffolder.svg?style=social&label=Star)](https://github.com/kamalkdolikay/krypt-master/tree/dev2)
<p align="center">
  <img src="https://image.slidesharecdn.com/4-es6metbabel-150513100342-lva1-app6891/95/es6-with-babeljs-1-638.jpg?cb=1431511634" width="200"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="200"/>
  <img src="https://fococriativo.com.br/wp-content/uploads/2015/08/angular-js-firebase.png" width="200"/>
  <img src="https://blog.zingchart.com/content/images/2016/06/react-1.png" width="200"/>
</p>

#### Introduction
Scaffolder is a nodejs application structure builder based on the best design pattern approach. The scaffolder is basically used to scaffold the basic nodejs apps with ES6 feature. The scaffolder uses the babel engine to to run nodejs code in ES6 format.


> Now support for REACT JS scaffold with webpack
you can respective documentations in the cloned scaffolds README.md files

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
* React - Webpack Scaffold
* Angular2 - Express - Passport - Webpack Scaffold
