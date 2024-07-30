//targeting the button
const buttonEl = document.querySelector('button')

// add a click event listner to the 

buttonEl.addEventListener('click', () => {
    //1. create an <li> element


    //2. use the text from the input field 
    //  a. selecting the input element
    //  b. using the dot value (.value) property to get that text (can used on input elements)
    const textFromInputField = document.querySelector('input').value

    //3. make the text of li element equal that text from the input field
    liEl.textContent = textFromInputField

    //then append that li to the ul element 
    //4. target the UL
    //5. then append

    //doing it in 1 line
    document.querySelector('ul').appendChild(liEl)

    // doing it in 2 lines
    // const ulEl = document.querySelector('ul')
    // ulEl.appendChild(liEl)


    //6. removing the text from the input field
    document.querySelector('input').value = ''

    //OR
    //1. create an <li> element
    const liEl = document.createElement('li')

    //2. use the text from the input field 
    //  a. selecting the input element

    const inputField = document.querySelector('input')

    //3. make the text of li element equal that text from the input field
    //using the dot value (.value) property of the inputField to get that text (can used on input elements)
    liEl.textContent = inputField.value

    //then append that li to the ul element 
    //4. target the UL
    //5. then append

    //doing it in 1 line
    document.querySelector('ul').appendChild(liEl)

    // doing it in 2 lines
    // const ulEl = document.querySelector('ul')
    // ulEl.appendChild(liEl)

    //6.removing the text from the input field
    inputField.value = ''
    

    buttonEl.addEventListener('click', () => {
    const liEl = document.createElement('li')
    const textFromInputField = document.querySelector('input').value
    liEl.textContent = textFromInputField
//before i append, i want to add an event listner for the li element
//this li element will toggle the class name of done
liEl.addEventListener('click', () =>{
    //to add a toggle on the class list 
    //we use the .classList
    //followed by the .toggle with our clas name
    //.toggle either adds or removes the class name
      liEl.classList.toggle('done')
})

    document.querySelector('ul').appendChild(liEl)
    
        document.querySelector('input').value = ''

    })
const deleteEl = document.querySelector('#delete')
deleteEl.addEventListener('click', () => {
    //remove any text in the ul
   document.querySelector('ul').innerHTML = ''
                                    // anything within the targeted tag will be deleted  
})