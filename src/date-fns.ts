import {subDays, format} from "date-fns"

const date = new Date(1900,1,27) //0 = enero y 1 = febrero
const rta = subDays(date, 23)
const src = format(rta, "yyyy/MM/dd")
console.log(src)
