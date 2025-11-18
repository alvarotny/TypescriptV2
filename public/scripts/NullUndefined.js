"use strict";
(() => {
    let mynull = null;
    let myundefined = undefined;
    let mynumber = null;
    let mystring = undefined;
    function saludo(name) {
        var _a;
        const nombre = (_a = name === null || name === void 0 ? void 0 : name.toLocaleLowerCase) !== null && _a !== void 0 ? _a : "nobody";
        console.log("Hola" + nombre);
        // return typeof name === "string"? console.log((mensaje+=name).toLowerCase()) : null
    }
    saludo("alvaro");
    saludo(null);
})();
