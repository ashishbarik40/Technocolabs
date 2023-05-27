// value will stay constant so we choose const 
const kelvin=293;

// converting Kelvin to Celcius
const celsius=kelvin-293;

// using let so that we can change the value
// and converting Celsius to Fahrenheit
let fahrenheit=celsius*(9/5)+32;

// to get a decimal number
fahrenheit=Math.floor(fahrenheit);

let newton=celsius*(33/100);
newton=Math.floor(newton);

console.log(`The temperature is ${newton} newton`);