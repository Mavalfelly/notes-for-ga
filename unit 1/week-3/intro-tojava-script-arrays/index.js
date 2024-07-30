/*
********************
Arrays
********************
Arrasy are notated using brackets[]
They contain zero or more elements
elements are the items in the array
elements can be anything
elements can be objects
function are objects



const firstArray = [] // first array. ahs zero elements
console.log(firstArray)


const secondArray = ['Gerol','Laronce','matt']
console.log(secondArray)

console.log(['kyle','kenny','cartman','stan'])



const secondArray = ['Gerol','Laronce','matt']
const southParkArray = ['kyle','kenny','cartman','stan']


arrays start at 0 when ref the elements within.


const emptyArray = []// there are no elements in the array . therfore the indecies do not exist.

i can simply call the array and use bracket notation to grab a (one singular) element from the array.
lets say i want to grab cartman.

console.log(southParkArray[2])
// stan wwould be
console.log(southParkArray[3])

**adding to the array**
const faveColorList = ['blue', 'red','black']
faveColorList[3] = 'orange'// added orange to the end
faveColorList[7] = 'purple'
console.log(faveColorList)
*/

/*
const arrayWithDataTypes = [9,'tail',['video games','coding'], {likes: 'food'}, true]
const southParkArray = ['kyle','kenny','cartman','stan']

console.log(arrayWithDataTypes)//[9,'tail',['video games','coding'], {likes: 'food',}, True]
console.log(arrayWithDataTypes[2])//['video games','coding']
arrayWithDataTypes[1] = 'paw'// replaces tail with paw
arrayWithDataTypes[2] = southParkArray// replaces ['video games','coding'] with['kyle','kenny','cartman','stan'] 
console.log(arrayWithDataTypes)// with new updates.
*/


/*
const southParkArray = ['kyle', 'kenny', 'cartman', 'stan']
const arrayWithDifTypes = [1, 'david', ['video games', 'coding'], { likes: 'food',}, false, ]


//we can replace elements in the array like so
arrayWithDifTypes[1] = 'matt' //replacing 'david' with 'matt'
arrayWithDifTypes[2] = southParkArray //replacing ['video games', 'coding'] with ['kyle', 'kenny', 'cartman', 'stan']
arrayWithDifTypes[5] = southParkArray //addeding to the 5th index of the array ['kyle', 'kenny', 'cartman', 'stan']
arrayWithDifTypes[2] = ['video games', 'coding']  //replacing ['kyle', 'kenny', 'cartman', 'stan'] with ['video games', 'coding'] 


//we can also do bracket notation on an array within an array
console.log(arrayWithDifTypes[2][1]) //  'coding'

const x = [1,2,3,[4,5,6,[7,8]]]// find 8
console.log(x[3][3][1])// answer
*/


//**length of an array**
// the .length can be usesed to see how many elements are in an array.

const movies = ['Barbie', 'interstellar','get out','mean girls','titanic','real steal']

console.log(movies.length)

//consolelog the last movie
console.log(movies[movies.length - 1])//real steal
