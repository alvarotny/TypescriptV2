// funcion anonima
(() =>{

  let titulo: string = "Typescript";
  let descripcion: string = "Este es un curso de typescript v2"
  let boelano : boolean = false
  let numberString : string = "8990"
  let numberConvertido = parseInt(numberString)

  console.log(`
    Title: ${titulo}
    Description: ${descripcion}
    boelano: ${boelano ? "Verdadero" : "Falso"}
    Numero: ${numberConvertido ? "si" : "no"}`)

})();
