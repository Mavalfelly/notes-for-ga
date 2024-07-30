//to connect javascript to html
//we need to put in an script tag in our html
//in the headers tag put in the following
//<script src="./app.js"></script>
//console.log('Hello world')

/*
Selectors


//we can grab items from the dom usind document.querySelector()
//and inside the parenthesis using the tag name

console.log(
    document.querySelector('h1')
)

//we can grab items from the dom usind document.querySelector()
//and inside the parenthesis using the ID attribute
console.log(
    document.querySelector('#main-title')
)

//we can grab items from the dom usind document.querySelector()
//and inside the parenthesis using the class attribute
console.log(
    document.querySelector('.title2')
)
//querySelector will only find the first item that meets the requirements
*/


let paragraphElement = document.querySelector('p')
console.log(paragraphElement)
//how to edit text on the html in JS
paragraphElement.textContent = 'the placeholder text is gone!'
paragraphElement.textContent = 'hey there is another p tag text'
paragraphElement.style.color = 'pink'

let h1Element = document.querySelector('h1#main-title')
//h1Element.style.fontSize = '100px'

//creating a new tag
let bodyElement = document.querySelector('body')//target the body tag
let h2Element = document.createElement('h2')// create a h2 element but not in dom yet
h2Element.textContent = 'comments section'// add text to h2
bodyElement.appendChild(h2Element)//append that h2 that we created onto the body element. append meens add to the end.



/////////////////////
/*
querySelectAll: allows multiple items to be selected in the DOM
querySelect: just the first
*/
let liElements = document.querySelectorAll('li')// selects all three of the LI elements
console.log(liElements)

liElements.forEach(function(v){
    console.log(v.textContent)//console logs the text of each LI
})

liElements.forEach(function(v,i){
    v.textContent = `comment number: ${i}` 
})
