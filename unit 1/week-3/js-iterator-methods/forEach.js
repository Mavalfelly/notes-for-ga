/*

** forEach **
forEach: loops through each value in the array
the call back function for the forEach method accepts 3 parameters
only the first is required
the second reference the index of the array
the third reference the entire array
the function inside the paranethsis is called the: "callback function"
the callback funciton for the .forEach accept 3 parameters
the first param is the value aka the element of the array at the time of looping. for example the first loop will be  {name: 'Alice', score: 58}, the second loop iwll be      {name: 'Bob', score: 76}, etc
the second param is the index at the time of the looping in the array
the third param is the entire array itself.
fyi: the first 2 are the mostly used. the third is mostly forgotten and hardly used

*/


let students = [
    {name: 'Alice', score: 58},
    {name: 'Bob', score: 76},
    {name: 'Charlie', score: 93},
    {name: 'David', score: 45},
    {name: 'Eve', score: 82}
];

//the forEach below will console log the students name and if they passed the test or not. 60 is passing

//function syntax
students.forEach(function(student) {
    //if the student's score if greater than or equal to 60
    if(student.score >= 60){ 
        console.log(`${student.name} pass with a score of ${student.score}`)
    }else {
        console.log(`${student.name} failed with a score of ${student.score}`)
    }
})

//arrow syntax
students.forEach((student) => {
    //if the student's score if greater than or equal to 60
    if(student.score >= 60){ 
        console.log(`${student.name} pass with a score of ${student.score}`)
    }else {
        console.log(`${student.name} failed with a score of ${student.score}`)
    }
})