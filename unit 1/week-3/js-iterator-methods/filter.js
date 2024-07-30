//filter method: this filters pased on criteria

const nums = [1,3,10,22,15,17]
const filterdNums = nums.filter(function(num){


    return rum>=15
})

console.log(filterdNums)


const celsiusTemperatures = [0, 20, 30, 40, 100];
const fTemp = celsiusTemperatures.map(function(temp){
    return temp * 9/5 + 32
})
console.log(fTemp)
New

//** filter **
//filter method: this filters based on criteria

const nums = [1,3,10,22,15,17]

//filter to anything greater than or equal to 15
const filterdNums = nums.filter(function(num){

    return num >= 15
})

console.log(filterdNums)


const people = [
    {
        name: 'david',
        age: 40
    },
    {
        name: 'denis',
        age: 35
    },
    {
        name: 'joy',
        age: 30
    }
]

//filter to any person with age greater than of equal to 34
const filterdPeople = people.filter(function(person){

    return person.age >= 34
})

console.log(filterdPeople)


const randomNumber = [100, 2, 5, 42, 99]

//filter on any odd
const oddNumbers = randomNumber.filter(function(v){
    // modulo is this % sign which return the reminder
    // we can only get 0 or 1
    // therefore it return the numbers with a reminder of 1 
    return v % 2
})

console.log(oddNumbers)

