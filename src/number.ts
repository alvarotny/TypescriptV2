// funcion anonima autoejecutable

(() =>{
  // inferida
  let productPrice = 123
  productPrice = 1000
  console.log(productPrice)

  // explicita
  let price : number = 9000
  price = price + 1;
  console.log(price)

  let productNumber: number;
  console.log(typeof productNumber) // -> undefined => variable no inicializada

  let discount: number = parseInt("asldf");
  console.log(discount) //-> NaN => no es un numero


  let hex: number = 0xfff;
  console.log(hex)
  let bin: number = 0b1001;
  console.log(bin)
})();
