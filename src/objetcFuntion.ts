(() =>{
  type talla = "S" | "M" | "L" | "XL"


  let lista : object[] = []
  const productF = (data:{product:string, stock:number, medida?:talla}):void =>{
    lista.push(data)
  }
  productF({product:"toalla", stock:89})
  productF({product:"toalla", stock:89, medida:"L"})
  console.log(lista)

  type producto = {title:string, stock:number, date?:Date}
  const products : producto[] = [];

  const addProduct = (data2:producto):void =>{
    products.push(data2)
  }

  addProduct({
    title: "pantalon",
    stock:23,
    date: new Date()
  })

  console.log(products)




})();
