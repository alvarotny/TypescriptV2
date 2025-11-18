"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addproduct)({ title: "camisa", stock: 233, medida: "L" });
console.log(product_service_1.productos);
console.log((0, product_service_1.calcStock)());
