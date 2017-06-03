var chai = require ('chai')
	expect = chai.expect,
	shell = require ('shelljs'),
	controller =  require ('../action.controller');

/**
 * to test directories
 */
chai.use (require ('chai-fs'));

describe ('testing the git remove support from repo', () => {
	this.timeout (20000);
	it ('should clone a repo, check it and then remove it and check it', () => {
		controller.execBasecampAngular2Script (() => {
			console.log ('created scaffold successfully');

			expect ();
		});
	})
});