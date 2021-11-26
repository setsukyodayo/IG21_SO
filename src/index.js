const chalk=require('chalk')
console.log(chalk.bgRed('Hello Yse !!!'))
console.log(chalk.green('Hello Yse !!!'))
const lat =process.avgv[2]
const lng =process.avgv[3]
const cities=require('cities')

if(lat && lng ){
    console.log(cities.gps_lookup(lat,lng))
}