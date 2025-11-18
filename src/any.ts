(() =>{
  let value : any;
  // lo recomendable es usar any solo en casos de q la libreria con el cual estas trabajando no cuente con tipados estrictos
  // asignacion de tipo -> any
  value = {"nombre":"alvaro"}
  const valueObject  = (<object>value)

  value = 233
  const valueNumber = (<number>value).toFixed()
  console.log(valueNumber)


  value = "alvaro"
  const valueString = (value as string).toLowerCase()
  console.log(valueNumber)

})();
