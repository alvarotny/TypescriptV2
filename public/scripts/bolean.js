"use strict";
(() => {
    //inferida
    let boelano = true;
    boelano = false;
    //explicito
    let isEnable = false;
    console.log(isEnable ? "El valor es verdadero" : "El valor no es verdadero");
    let aleatorio = Math.random();
    isEnable = aleatorio >= 0.5 ? true : false;
    console.log("value random", isEnable);
})();
