"use strict";
(() => {
    let value = [];
    value.push("hola", { "nombre": "pablito" });
    console.log(value);
    let valueStringNumber;
    valueStringNumber = "al";
    valueStringNumber = 23;
    function validateValue(myvalue) {
        if (typeof myvalue === "string") {
            console.log("es parametro recibio  un texto =>", myvalue);
        }
        else {
            console.log("el parametro recibio un objeto =>", myvalue);
        }
    }
    validateValue({ "name": "juana", "edad": 90 });
    validateValue("mensajeee");
})();
