//** every **
//every method: checks every element in the array and make sure the condition is met for every element
//if every element meets that condition the result will be true
//if at least one does now, the result is false
const cars = [
    { color: 'red', make: 'BMW', year: 2011 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
]


// is my car newer than the year 2008

const everyCarIsNewer = cars.every(function(v){
    return v.year > 2008
})

console.log(everyCarIsNewer)