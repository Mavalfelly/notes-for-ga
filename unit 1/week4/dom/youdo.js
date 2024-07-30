//let bodyElement = document.querySelector('body')
//let ulElement = document.createElement('ul')
//let liElement1 = document.createElement('li')
//let liElement2 = document.createElement('li')
//let liElement3 = document.createElement('li')
//let liElement4 = document.createElement('li')
//liElement1.textContent = 0
//liElement2.textContent = 1
//liElement3.textContent = 2
//liElement4.textContent = 3
//bodyElement.appendChild(ulElement)
//ulElement.appendChild(liElement1)
//ulElement.appendChild(liElement2)
//ulElement.appendChild(liElement3)
//ulElement.appendChild(liElement4)

// approach two: for loop

//create a UL element
const ulElement = document.createElement('ul')

//a for loop that loops 4 times 0 -> 3
for (let i = 0; i < 4; i += 1) {
    // create an li element
    const liElement = document.createElement('li')
    //the text for the li is equal to i 
    liElement.textContent = i

    //append of li to the ul
    ulElement.appendChild(liElement)
}

//now there is a UL element that holds 4 li elements (out in the ether)

//adding the ulElement to the body
document.querySelector('body').appendChild(ulElement)




//OPTION 3

let ulElemenet = document.createElement('ul')
ulElemenet.textContent = 'List sample'
bodyElement.appendChild(ulElemenet)
const qty = [1,2,3,4]
const createLiElements = () => {
    qty.forEach((v, i) => {
        let ulElement = document.querySelector('ul')
        let liElemenet = document.createElement('li')
        liElemenet.textContent = `${i+1}`
        ulElement.appendChild(liElemenet)
    })
}
createLiElements()
