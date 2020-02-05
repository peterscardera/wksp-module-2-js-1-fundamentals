// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.4
// Write a loop that will print to the console all of the EVEN integers from 100 to 0.
for (let number = 100; number >= 0; number--) {
    
    if (number %2 === 0) {
        console.log(number);
    }
    
}