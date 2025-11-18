(() =>{
  let value : (string | object)[] = [];
  value.push("hola",{"nombre":"pablito"})
  console.log(value)

  let valueStringNumber : string | number;
  valueStringNumber = "al"
  valueStringNumber = 23

  function validateValue(myvalue: string | Object){
    if(typeof myvalue === "string"){
      console.log("es parametro recibio  un texto =>", myvalue)
    }else{
      console.log("el parametro recibio un objeto =>", myvalue)
    }
  }

  validateValue({"name": "juana", "edad": 90})
  validateValue("mensajeee")

})();
