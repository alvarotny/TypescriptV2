"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const date = new Date(1900, 1, 27); //0 = enero y 1 = febrero
const rta = (0, date_fns_1.subDays)(date, 23);
const src = (0, date_fns_1.format)(rta, "yyyy/MM/dd");
console.log(src);
