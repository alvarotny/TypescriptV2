(() =>{
type value = string | object;
let valueFuntion : value;

function funtionSO(valueFuntion : value){
  if(typeof valueFuntion === "object"){
    console.log("El dato recibido es un objeto : ", valueFuntion)
  }else{
    console.log("El parametro recibido fue un string ",valueFuntion )
  }
};


// literal types
let shirtSize : "S" | "M" | "L" | "XL";

// uso de types para replicar literal types
type Size = "S" | "M" | "L" | "XL";
function greet(parametro1: value, parmetro2: Size){
  return typeof parametro1 === "string" ? console.log(`value string: ${parametro1.toLowerCase()} la talla escogida es: ${parmetro2}`) : null;
}
greet("alvaro","L")



})();
