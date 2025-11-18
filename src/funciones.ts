(() =>{
  type talla = "S" | "M" | "L" | "XL"
  const productCreate = (title:string, stock:number, medida?:talla, date?:Date) =>{
    const fecha = date ? date : new Date();
    const tall = medida ? `Talla: ${medida}` : "No seleccionaste la talla"
    return console.log(`Producto: ${title} stock: ${stock} Talla: ${tall} Fecha: ${fecha}`);
  }
  productCreate("Ropa",12,"L")

})();
