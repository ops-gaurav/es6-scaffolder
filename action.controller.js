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

    command.stdout.on ('data', (data) => {
        console.log (chalk.green (data));
    });

    command.stdout.on  ('data', (data) => {
        console.error (chalk.red (data));
    });

    command.on ('exit', (code) => {
        if (code == 128)
            console.log (chalk.red('scaffolding already exists.. terminating'));
        
        next();
    });
}

/**
 * the script to configure angular2 basecamp with Typescript and bootstrap
 */
module.exports.execBasecampAngular2Script = function (next) {
    var command = spawn ('git', ['clone', constants.es6BasecampAngular2Repo]);

    command.stdout.on ('data', (data) => console.log (chalk.green (data)));
    command.stderr.on ('data', (data) => console.error (chalk.red (data)));

    command.on ('exit', (code) => {
        if (code == 128)
            console.log (chalk.red ('scaffolding already exists.. terminating'));

        next();
    });
}


module.exports.execBasecampReactScrpt = function (next) {
    var command = spawn ('git', ['clone', constants.reactRepo]);

    command.stdout.on ('data', data => console.log (chalk.green (data)));
    command.stderr.on ('data', data => console.error (chalk.red (data)));

    command.on ('exit', code => {
        if (code == 128)
            console.log (chalk.red ('scaffolding already exists.terminating'))

        next();
    })
};

/**
 * the common script to execute after cloning a repo
 */
module.exports.postCloningScript = function (directory) {
    console.log (chalk.green('Done creating scaffold'));
    console.log (chalk.green ('configuring your scaffold') );

    var npmInstall = spawn ('npm', ['--prefix', directory ,'install', directory]);

    npmInstall.stdout.on ('data', (data) => console.log (chalk.green (data)));
    npmInstall.stderr.on ('data', (data) => console.log (chalk.red (data)));

    // npmInstall.stderr.pipe (process.stderr);
    // npmInstall.stdout.pipe (process.stdout);

    npmInstall.on ('exit', function (code) {
        if (code == 0) {
            console.log (chalk.green ('DONE!'))
            
            /**
             * after cloning.. remove the git support from the directory
             */
            removeGitSupport (directory);
        } else {
            console.log (chalk.red ('Some error: '+ code));
        }
    });
}

/**
 * script to remove the git repo support in the cloned repo. Run this after postCloningScript
 * @param {string} directory 
 */
function removeGitSupport (directory) {
    console.log (chalk.green ('removing remote git'));

    var script = spawn ('rm', ['-Rf', directory+'.git']);

    script.stdout.on ('data', (data) => console.log (chalk.green (data)));
    script.stderr.on ('data', (data) => console.log (chalk.red (data)));
    
    script.on ('exit', (code) => {
        if (code == 0)
            console.log (chalk.green ('Configured'));
        else
            console.log (chalk.red ('error removing git from repo'));
    });
}

/**
 * script to update es6-scaffolder
 */
module.exports.updateScript = function (version) {
    console.log (chalk.green ('Updating your es6-scaffold to '+ version));

    var updateCommand = spawn ('npm', ['uninstall', '-g', 'es6-scaffolder']);

    updateCommand.stderr.pipe (process.stderr);
    updateCommand.stdout.pipe (process.stdout);

    updateCommand.on ('exit', (code) => {
        if (code == 0) {
            updateCommand = spawn ('npm', ['install', '-g', 'es6-scaffolder']);

            updateCommand.stderr.pipe (process.stderr);
            updateCommand.stdout.pipe (process.stdout);

            updateCommand.on ('exit', (code) => {
                if (code == 0)
                    console.log (chalk.green ('scaffolder has been updated to '+ version));
                else 
                    console.log (chalk.red ('Error occured while updating to '+ version));
            });
        } else {
            console.log (chalk.red ('Error occured while updationg to version '+ version));
        }
    });
}