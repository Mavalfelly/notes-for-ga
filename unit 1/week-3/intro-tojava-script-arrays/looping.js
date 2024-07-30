/*
***iterating through an array***
**Using a for loop**
A standard for loop can iterate through an array.
Initialize the loop with idx set to 0 - the index of the first element.
End iteration at the index of the last element:
const movies = [ 'Barbie', 'Arrival', 'Get Out', 'Mean Girls', 'Titanic' ]

// *classic for loop*
for(let i = 0; i < movies.length; i+=1){
    console.log(`the movie at index ${i} is: ${movies[i]}`)
}
// pros: we can get the index
// cons: we write more code
*for of loop*
const movies = [ 'Barbie', 'Arrival', 'Get Out', 'Mean Girls', 'Titanic' ]
for(let movie of movies){
    console.log(movie)
}
// pros: less code
// cons: more code needed to get the index
*forEach *
movies.forEach(function(movie, i){
    console.log(`the movie at index ${i} is: ${movie}`)
})

// pros: we are using a built in array method
// cons: we have to iterate through everything no exception. no way to stop 

//es6 syntax (the arrow syntax)
movies.forEach((movie, i) => {
    console.log(`the movie at index ${i} is: ${movie}`)
})



*/
const letters = ['a', 'b', 'c', 'd', 'e']
  //starting variable value;
                // stopping condition
                                  //how much am i increaing the variable each time
for(let i = 0; i < letters.length; i+=1){
    console.log(`the letter at index ${i} is: ${letters[i]}`)
}