/*
**********************
Branching/conditionals
**********************
type of control flow that allows for different code paths
to be executed based on specific conditions.


let myAge = 40

if(myAge >= 21){
  console.log('i get beer')
} else {
    console.log('nothing')
}

//prints i get beer


const myShirtColor = 'black'
const myAge = 40
const myGender = 'male'

if(myShirtColor === 'black'){
    console.log('my shirt is black') //<---- 
}else if(myAge === 40){
    console.log('my age is 40')
}else if(myGender === 'male'){
    console.log('my gender is male')
}

//prints my shirt is black because the first condition is met. 
//regardless of the conditions below it, if any condition is first met, it will run the code on that particular block
// then the code will not look at ANY OTHER conditions

const val = 3;

if (val === 1) {
  console.log('val is one');
} else if (val === 2) {
  console.log('val is two');
} else if (val === 3) {
  console.log('val is three');
} else {
  console.log('not one, two, or three');
}


const light = "purple"

if(light === "green") {
    console.log('Go')
} else if (light === "yellow"){
    console.log('Slow')
} else if (light === "red"){
    console.log('stop')
}else  {
    console.log('whatever')
}

ORRRRRRR
const light = 'green'

if(light === 'green'){
    console.log('Go')
} else if(light === 'yellow'){
    console.log('Slow')
} else if(light === 'red'){
    console.log('Stop')
} else if(light !== 'green' && light !== 'yellow' && light !== 'red'){
    console.log('Whatever')
}

ORRRRR

Using switch statement (another option for branching in javascript):
const color = 'yellow';
switch(color) {
    case 'green':
        console.log('Go');
        break;
    case 'yellow':
        console.log('Slow');
        break;
    case 'red':
        console.log('Stop');
        break;
    default:
        console.log('Whatever');
}
*/








