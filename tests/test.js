var assert = require ('assert');
var shell = require ('shelljs');
var chalk = require ('chalk');
var myController = require ('../action.controller');

describe ('Array', () => {
    describe ('#indexOf', () => {
        it ('should return -1 when value is not present', () => {
            assert.equal (-1, [1,2,3].indexOf (4));
        })
    })
});


/**
 * test for es6-basecamp fetching
 */

describe ('action.controller', function (){
    this.timeout (20000);
    describe ('#es6BaseCampScript', function () {
        it ('It should clone a repository and then remove it', function (done) {
            myController.execBasecampScript (() => {                
                console.log (chalk.green ('Scaffold created successfully!'));

                console.log (chalk.red ('Removing the scaffold now..'))
                shell.rm ('-Rf', 'es6-basecamp');
                console.log (chalk.green ('DONE!!'));
                done();
            });
        })
    })
});
