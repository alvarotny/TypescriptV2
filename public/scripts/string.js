"use strict";
// funcion anonima
(() => {
    let titulo = "Typescript";
    let descripcion = "Este es un curso de typescript v2";
    let boelano = false;
    let numberString = "8990";
    let numberConvertido = parseInt(numberString);
    console.log(`
    Title: ${titulo}
    Description: ${descripcion}
    boelano: ${boelano ? "Verdadero" : "Falso"}
    Numero: ${numberConvertido ? "si" : "no"}`);
})();
