const argv = require('yargs')
    .option('n', {
        alias: 'number',
        type: 'number',
        demandOption: true,
        describe: 'Es el numero de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Lista la tabla de multiplicar'
    })
    .option('p', {
        alias: 'pending',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Lista la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.n)) {
            throw 'La base tiene que ser un número'
        }
        if (isNaN(argv.p)) {
            throw 'El limite tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;