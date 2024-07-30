const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
]

//this will always return the FIRST match
//there are 2 white care. the toyota and tesla. 
//since the toyata is above the tesla and because toyata is the first match
//it will be returned
const firstWhiteCar = cars.find(function(car){
    return car.color === 'white'
})