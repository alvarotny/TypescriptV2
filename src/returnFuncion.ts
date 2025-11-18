(() =>{

  const sumNum = (numeros: number[]): number =>{
    let total : number = 0;
    numeros.forEach((item) =>{
      total += item;
    })
    return total;
  }
  console.log(sumNum([788,2,1,3,12]))

  // funcion sin retorno
  const funcionVoid = (nums: number[]) : void => {
    let value : number = 0;
    nums.forEach((i) => value+=i)
    console.log(value)
  }
  funcionVoid([80,90])


})();
