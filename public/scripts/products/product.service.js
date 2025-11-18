"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.addproduct = exports.productos = void 0;
exports.productos = [];
const addproduct = (data) => {
    exports.productos.push(data);
};
exports.addproduct = addproduct;
const calcStock = () => {
    let total = 0;
    exports.productos.forEach((item) => {
        total += item.stock;
    });
    return total;
};
exports.calcStock = calcStock;
