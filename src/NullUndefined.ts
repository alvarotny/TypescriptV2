(() =>{
  let mynull : null = null;
  let myundefined : undefined = undefined;

  let mynumber : number | null = null;
  let mystring : string | undefined = undefined;

  type parametro  = null | string;

  function saludo(name: parametro){
    const nombre = name?.toLocaleLowerCase ?? "nobody"
    console.log("Hola" + nombre)
    // return typeof name === "string"? console.log((mensaje+=name).toLowerCase()) : null
  }
  saludo("alvaro")
  saludo(null)

})();
