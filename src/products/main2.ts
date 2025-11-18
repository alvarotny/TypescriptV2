import {productos, addproduct,calcStock}  from "./product.service"

addproduct({title:"camisa",stock:233,medida:"L"})
console.log(productos)
console.log(calcStock())

