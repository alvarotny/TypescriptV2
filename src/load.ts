import _ from "lodash"
// se tuvo q instalar un sistema de tipo por lodash solo es para js => npm i --save-dev @types/lodash

const data = [{title:"mateo", rol:"customer"},{title:"juan", rol:"dev"},{title:"matias", rol:"customer"},{title:"pablo", rol:"dev"}]

const rta = _.groupBy(data, (item) => item.rol);
console.log(rta)
console.log(1+"1")
