//some method: checks to make sure at least ONE element meets a condition
const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
];


const hasFord = cars.some(function(car){
    return car.make === 'Ford'
})
console.log(hasFord) //true

const hasAudi = cars.some(function(car){
    return car.make === 'Audi'
})
console.log(hasAudi) //false