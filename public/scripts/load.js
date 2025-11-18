"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
// se tuvo q instalar un sistema de tipo por lodash solo es para js => npm i --save-dev @types/lodash
const data = [{ title: "mateo", rol: "customer" }, { title: "juan", rol: "dev" }, { title: "matias", rol: "customer" }, { title: "pablo", rol: "dev" }];
const rta = lodash_1.default.groupBy(data, (item) => item.rol);
console.log(rta);
console.log(1 + "1");
