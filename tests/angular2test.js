var assert = require ('assert');
var shell = require ('shelljs');
var chalk = require ('chalk');

var myController = require ('../action.controller');


/**
 * unit test for action.controller.es6angular2 scaffolder
 */
describe ('testing action.controller', function () {
	this.timeout (20000);

	describe ('#es6BasecampAngular2', () => {

		// TEST case 1
		it.skip ('should clone a repository in es6-basecamp-angular2 and then remove it', (done) => {
			myController.execBasecampAngular2Script (() => {
				console.log (chalk.green ('scaffold success'));
                console.log (chalk.red ('Removing the scaffold now..'))
                
                //shell.rm ('-Rf', 'es6-basecamp-angular2');
                console.log (chalk.green ('DONE!!'));
                done ();
			});
		})
	});
});