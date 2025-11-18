"use strict";
(() => {
    const productCreate = (title, stock, medida, date) => {
        const fecha = date ? date : new Date();
        const tall = medida ? `Talla: ${medida}` : "No seleccionaste la talla";
        return console.log(`Producto: ${title} stock: ${stock} Talla: ${tall} Fecha: ${fecha}`);
    };
    productCreate("Ropa", 12, "L");
})();
