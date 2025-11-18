"use strict";
(() => {
    const sumNum = (numeros) => {
        let total = 0;
        numeros.forEach((item) => {
            total += item;
        });
        return total;
    };
    console.log(sumNum([788, 2, 1, 3, 12]));
    // funcion sin retorno
    const funcionVoid = (nums) => {
        let value = 0;
        nums.forEach((i) => value += i);
        console.log(value);
    };
    funcionVoid([80, 90]);
})();
