"use strict";
// funcion anonima autoejecutable
(() => {
    // inferida
    let productPrice = 123;
    productPrice = 1000;
    console.log(productPrice);
    // explicita
    let price = 9000;
    price = price + 1;
    console.log(price);
    let productNumber;
    console.log(typeof productNumber); // -> undefined => variable no inicializada
    let discount = parseInt("asldf");
    console.log(discount); //-> NaN => no es un numero
    let hex = 0xfff;
    console.log(hex);
    let bin = 0b1001;
    console.log(bin);
})();
