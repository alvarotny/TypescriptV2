"use strict";
(() => {
    let lista = [];
    const productF = (data) => {
        lista.push(data);
    };
    productF({ product: "toalla", stock: 89 });
    productF({ product: "toalla", stock: 89, medida: "L" });
    console.log(lista);
    const products = [];
    const addProduct = (data2) => {
        products.push(data2);
    };
    addProduct({
        title: "pantalon",
        stock: 23,
        date: new Date()
    });
    console.log(products);
})();
