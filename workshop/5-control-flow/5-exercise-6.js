// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q6
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000
//
// ANSWER: the number you should see in the console is 3127500

function multiple(num) {

    let newArray = 0;
    for (let i = 0; i <= num; i++) {
        if( i % 4 === 0 ) {
            newArray += i     
        }
    }
    return newArray
    }
    
    console.log(multiple(5000))
    
    //OR


    let sum = 0;
    for(let i = 0; i <=5000; i+=4) {
        sum += i
    }