let fs = require('fs');
const { parse } = require('path');
// const archivo = require("./bicicleta.json")

archivoJSON = fs.readFileSync("./bicicletas.json");
archivoString = JSON.parse(archivoJSON);

module.exports = archivoString;