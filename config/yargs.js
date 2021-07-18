const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica el numero hasta donde se mostraran nuestras multiplicaciones'
    })
    .check( (argv, options) => {
        if( isNaN( argv.h ) ){
            throw 'Hasta tiene que ser un numero'
        }
        return true;
    })
    .argv;


    module.exports = argv;