const { createArchive } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

console.log(argv);

createArchive(argv.n, argv.l, argv.p)
  .then( nameArchive => console.log(nameArchive, 'creado') )
  .catch( err => console.log(err) );
