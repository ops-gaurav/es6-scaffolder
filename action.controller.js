var chalk = require ('chalk');
var constants = require ('./constants');
/**
 * spwn is an EventEmitter object. Using spawn we can listen to
 * stdout/stderr events and hence can display live.
 */
var spawn = require ('child_process').spawn;

//const exports = module.exports = {};

module.exports.execBasecampScript = function (next) {
    var command = spawn ('git',  ['clone', constants.es6BasecampRepo]);

    command.stdout.on ('data', (data) => {
        console.log (chalk.blue(data));
    });

    command.stderr.on ('data', (data) => {
        console.error (chalk.green(data));
    })

    command.on ('exit', (code) => {
        if (code == 128)
            console.log (chalk.red('scaffolding already exists.. terminating'));
        //console.log ('process executed with code '+ code);
        next ();
    })
}