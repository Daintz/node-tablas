const fs = require('fs');

const createArchive = async (number = 5, list = false, limit = 10) => {
  try {
    let salida = '';

    for (let i = 1; i <= limit; i++) {
      let resultado = number * i;
      salida += `${number} x ${i} = ${resultado}\n`;
    }

    if (list) {
      console.log('====================');
      console.log('Tabla del:', number);
      console.log('====================');
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);
    return `tabla-${number}.txt`;

  } catch (error) {
    throw error;
  }
}

module.exports = { createArchive }