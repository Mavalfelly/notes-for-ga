/*
*****************
Looping
*****************
Looping is a control flow mechanism that repeats a set of actions.
In programming, these actions are typically code blocks,
and they are repeated either until a certain condition is no longer met (while the condition is true) or
a specific number of times (for a certain number of iterations).
This process is especially crucial when dealing with collections of data, such as arrays or lists,
where you might need to examine or manipulate each element in the collection.


FOR LOOP MUST USE SEMICOLONS TO DIFERENCIATE
//let count = 1;  means starting at 1
//count <= 10;  means UNTIL my count is 10
//count += 1 means each time im going to increase my count by 1
for(let count = 1; count <= 10; count += 1){
    console.log(count) //console.log the count for each iteration
}

for(let count =10; count <= 20; count +=1){
    console.log(count)
}


for(let count =0; count <= 30; count +=1){
    if (count === 21){
        console.log(' I Have Beer')
    }else {
    console.log(count)
    }
}

for(let count = 0; count <= 21; count += 1){
    // the condition that is FIRST met is what is logged
    if(count >= 21){
        console.log(`I can purchase beer. i am ${count}`) //string interpolation:  we can use the back tick to put together string
        //for variable we can use the dollar sign and curly brackets and put variable inside them
    } else if(count >= 18){
        console.log('I can purchase lotto. i am ' + count) //string concatenation: we can use the plus to put together string 
        //for variable we can use add them using the plus symbol
    } else {
        console.log('whatever')
    }
}
*/

    