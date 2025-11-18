"use strict";
let nombres;
(() => {
    let lists = ["mateo", 890, true];
    let mixed = ["Juan", true, "pedro", false];
    let numbers = [];
    lists.push({ "nombre": "alvaro", "edad": 89 });
    lists.push([68, "alvaro2", false]);
    mixed.push("juan2", false, { "edad": 23 }, [23, 90]);
    numbers.push(23, 23, 23, 12, 1222, 3);
    let newlistNumbers = numbers.map(item => item * 2);
    console.log(newlistNumbers);
    console.log(lists);
    let lists2 = [
        { nombre: "juan33", edad: 43, values: [32, "manzana", false] },
        { nombre: "mateo233", edad: 12, values: { "profe": "marcos", "edad": 43 } }
    ];
    console.log("lista de objetos: ", lists2);
})();
