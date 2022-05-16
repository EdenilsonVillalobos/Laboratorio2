var fs = require("fs");

var stringify =require("csv-stringify");


var data=[

    {"nombre": "Los Vengadores", "genero": "Accio,ciencia ficcion"},

    {"nombre": "El Conjuro", "genero": "Terror, Suspenso"}

];



stringify.stringify(data,{

    header:true

}, function (err, output) {

    fs.writeFileSync(__dirname+"/listadoDePeliculas.csv", output);

});