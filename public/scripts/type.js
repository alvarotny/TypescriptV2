"use strict";
(() => {
    let valueFuntion;
    function funtionSO(valueFuntion) {
        if (typeof valueFuntion === "object") {
            console.log("El dato recibido es un objeto : ", valueFuntion);
        }
        else {
            console.log("El parametro recibido fue un string ", valueFuntion);
        }
    }
    ;
    // literal types
    let shirtSize;
    function greet(parametro1, parmetro2) {
        return typeof parametro1 === "string" ? console.log(`value string: ${parametro1.toLowerCase()} la talla escogida es: ${parmetro2}`) : null;
    }
    greet("alvaro", "L");
})();
