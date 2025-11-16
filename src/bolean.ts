(()=>{
  //inferida
  let boelano = true
  boelano = false

  //explicito
  let isEnable: boolean = false
  console.log(isEnable ? "El valor es verdadero" : "El valor no es verdadero")

  let aleatorio: number = Math.random();
  isEnable = aleatorio >= 0.5 ? true : false
  console.log("value random", isEnable)

})();
