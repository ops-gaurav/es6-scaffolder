#! /usr/bin/env node

var menu = require ('console-menu');
var chalk = require ('chalk');

menu ([
    { hotkey: '1', title: 'es6-basecamp', selected: true },
    { hotkey: '2', title: 'es6-basecamp with Angular 1' },
    { hotkey: '3', title: 'es6-basecamp with Angular 2'},
    { separator: true },
    { hotkey: '?', title: 'Help' }
], {
    header: 'Welcome to es6 basecamp by gaurav sharma',
    border: true
}). then ( item => {
    if ( item ) {
        console.log (chalk.bgYellow ('selected item is: '+ JSON.stringify (item)));
    } else {
        console.log ('cancelling the menu')
    }
});