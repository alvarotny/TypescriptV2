import {product} from "./product.model"

export const productos : product[] = [];
export const addproduct = (data:product):void =>{
  productos.push(data)
}
export const calcStock = (): number =>{
  let total:number = 0;
  productos.forEach((item) =>{
    total += item.stock
  })
  return total;
}
