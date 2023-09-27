const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'ES LA BASE DE LA TABLA DE MULTIPLICAR'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'MUESTRA LA TABLA EN CONSOLA'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'NOS DICE HASTA QUE NUMERO QUIERES LA TABLA'
                })
                
                .check( (argv, options)  => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;



 module.exports = argv;