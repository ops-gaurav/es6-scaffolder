var chalk = require ('chalk');
var constants = require ('./constants');
/**
 * spawn is an EventEmitter object. Using spawn we can listen to
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


/**
 * for angularJS scaffolding URL
 */
module.exports.execBasecampAngularScript = function (next) {
    var command = spawn ('git', ['clone', constants.es6BasecampAngularRepo]);

    command.stdout.pipe (process.stdout);
    command.stderr.pipe (process.stderr);

    command.on ('exit', (code) => {
        if (code == 128)
            console.log (chalk.red('scaffolding already exists.. terminating'));
        
        next();
    });
}

/**
 * the common script to execute after cloning a repo
 */
module.exports.postCloningScript = function (directory) {
    console.log (chalk.green('Done creating scaffold'));
    console.log (chalk.green ('configuring your scaffold') );

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
}