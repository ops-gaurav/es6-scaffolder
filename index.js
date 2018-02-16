var _cli = require('commander');
var chalk = require('chalk');
var log = console.log;

var errors = {
    arguments:  log(chalk.red('\n [ERROR] - Invalid command, See "--help" for a list of available commands.\n')),
    help:  log(chalk.red('\n [ERROR] - See "--help" for a list of available commands.\n'))
}
var availableTypoes = ['react', 'node', 'angular', 'react-native']

// create cli
_cli
  .version('0.0.1') //for version --version
  .description('Generate things'); //description for help -h


//   for create command
  _cli
  .command('create')
  .alias('g')
  .description('Generate files')
  .action((typeo, name, n) => {
      log(chalk.blue(typeo, appName, nonRequired));
      if(nonRequired){
          errors.arguments;
          process.exit(0);
      }else{
        if(availableTypoes.indexOf('typeo') >=0){
            // call write function
            switch (typeo) {
                case 'react':
                // call react write template function here
                case 'node':
                // call node write template function here
                case 'angular':
                // call angular write template function here
                case 'react-native':
                    // call react-native write template function here
            }

        }else{
            error.arguments;
            process.exit(0);
        }


      }
});

_cli.parse(process.argv);


if (_cli.args.length) {
    error.arguments;
    process.exit(0);
}



