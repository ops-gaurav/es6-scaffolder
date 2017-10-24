#! /usr/bin/env node

var menu = require ('console-menu');
var chalk = require ('chalk');
var spawn = require ('child_process').spawn;
var path = require ('path');
var latestVersion = require ('latest-version');

var controller = require ('../action.controller');
var constants = require ('../constants');

var fs = require ('fs');

var packageJson = require ('../package.json');


if (process.argv.length > 2) {
    var args = process.argv[2];
    switch (args) {
        case 'version':
            console.log (chalk.green ('ES6 Scaffolder'));
            console.log (chalk.green (`version ${packageJson.version}`));
            break;
        case 'check-update':
            console.log (chalk.blue ('Checking for latest version on npm...'));
            latestVersion (packageJson.name). then ((version) => {
                if (version == packageJson.version) {
                    console.log (chalk.green ('You are already updated: '+ version));
                    console.log (chalk.grey ('use '), chalk.yellow ('scaffold update'), chalk.grey (' to update to the latest version'));
                } else {
                    console.log (chalk.green ('Update available to '+ version));
                    console.log (chalk.gray ('Your version: '+ packageJson.version));
                    console.log (chalk.grey ('use '), chalk.red ('scaffold update'), chalk.grey (' to update to the latest version'));
                }
            });
            break;
        case 'update':
            latestVersion (packageJson.name). then ((version) => {
                if (version == packageJson.version) {
                    console.log (chalk.red ('You are already on the updated version'));
                } else {
                    controller.updateScript (version);
                }
            });
            break;
        /**
         * addition to install scaffold components and addons
         */
        case 'install':

            break;
        default:
            console.log (chalk.red ('invalid options provided'));
    }
} else {
    menu ([
        { hotkey: '1', title: 'es6-basecamp', selected: true },
        { hotkey: '2', title: 'es6-basecamp with Angular 1' },
        { hotkey: '3', title: 'es6-basecamp with Angular 2 + webpack'},
        { hotkey: '4', title: 'React with webpack' },
        { hotkey: '5', title: 'ES6 NodeJS, Angular2 and Passport Authentication (Standalone) '},
        { separator: true },
        { hotkey: '?', title: 'Help' }
    ], {
        header: constants.appHeader+ ' '+ packageJson.version,
        border: true
    }). then ( item => {
        if ( item ) {
            switch (item.hotkey){
                case '1':
                    console.log (chalk.grey ('Installing es6-basecamp scaffold'));

                    controller.execBasecampScript (() => {

                        var directory = path.resolve()+path.sep+'es6-basecamp';

                        controller.postCloningScript (directory);
                    });

                    break;
                case '2':
                    // configuring es6 with angularJS 
                    console.log (chalk.grey ('Installing es6-basecamp for Angular'));

                    controller.execBasecampAngularScript (() => {
                        var directory = path.resolve()+path.sep+'es6-basecamp-angular';

                        controller.postCloningScript (directory);
                    });

                    break;
                
                case '3':
                    //installing es6 with angular2 webpack
                    console.log (chalk.grey ('Installing es6-basecamp-angular2 with webpack'));

                    controller.execBasecampAngular2Script (() => {
                        var directory = path.resolve()+ path.sep + 'es6-basecamp-ng2-weback'+ path.sep;

                        controller.postCloningScript (directory);
                    });
                    break;
                case '4':
                    console.log (chalk.grey ('Installing React with webpack scaffold'));

                    controller.execBasecampReactScript (() => {
                        var directory = path.resolve()+ path.sep + 'basecamp-react' + path.sep;

                        controller.postCloningScript (directory);
                    });
                    break;
                case '5':
                    // TODO implement here
                    console.log (chalk.grey ('Installing ES6 Node, Angular 2, Passport Standalone scaffold.'))
                    
                    controller.execENA2PassScript (() => {
                        const directory = path.resolve()+ path.sep + 'my-express-angular2-app'+ path.sep;

                        controller.postCloningScript (directory);
                    })
                case '?':
                    console.log ('es6-scaffolder Help?');
                    fs.readFile ('README.md', (err, data) => {
                        if (err) throw err;
                        console.log (data.toString());
                    })
                    break;
                default: 
                    console.log (chalk.blue('Work in progress. :('));
            }
        } else {
            console.log ('Cancelling the menu')
        }
    });
}