#! /usr/bin/env node

var menu = require ('console-menu');
var chalk = require ('chalk');
var spawn = require ('child_process').spawn;
var path = require ('path');
var controller = require ('../action.controller');
var constants = require ('../constants');

menu ([
    { hotkey: '1', title: 'es6-basecamp', selected: true },
    { hotkey: '2', title: 'es6-basecamp with Angular 1' },
    { hotkey: '3', title: 'es6-basecamp with Angular 2'},
    { separator: true },
    { hotkey: '?', title: 'Help' }
], {
    header: constants.appHeader,
    border: true
}). then ( item => {
    if ( item ) {
        switch (item.hotkey){
            case '1':
                console.log (chalk.grey ('Installing es6-basecamp scaffold'));

                controller.execBasecampScript (() => {
                    console.log (chalk.green('Done creating scaffold'));
                    console.log (chalk.green ('configuring your scaffold') );

                    var directory = path.resolve()+path.sep+'es6-basecamp';
                    var npmInstall = spawn ('npm', ['--prefix', directory ,'install', directory]);

                    npmInstall.stderr.pipe (process.stderr);
                    npmInstall.stdout.pipe (process.stdout);

                    npmInstall.on ('exit', function (code) {
                        if (code == 0) {
                            console.log (chalk.green ('DONE!'))
                        } else {
                            console.log (chalk.red ('Some error: '+ code));
                        }
                    });
                });

                break;
            case '2':
                // configuring es6 with angularJS 
                console.log (chalk.grey ('Installing es6-basecamp for Angular'));

                controller.execBasecampAngularScript (() => {
                    console.log (chalk.green('Done creating scaffold'));
                    console.log (chalk.green ('configuring your scaffold') );

                    var directory = path.resolve()+path.sep+'es6-basecamp';
                    var npmInstall = spawn ('npm', ['--prefix', directory ,'install', directory]);

                    npmInstall.stderr.pipe (process.stderr);
                    npmInstall.stdout.pipe (process.stdout);

                    npmInstall.on ('exit', function (code) {
                        if (code == 0) {
                            console.log (chalk.green ('DONE!'))
                        } else {
                            console.log (chalk.red ('Some error: '+ code));
                        }
                    });
                });
            default: 
                console.log (chalk.blue('Work in progress. :('));
        }
    } else {
        console.log ('Cancelling the menu')
    }
});