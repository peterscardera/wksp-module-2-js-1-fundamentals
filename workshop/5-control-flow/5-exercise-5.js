// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q5
// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
// Life in the army is regimented! These are the hours alloted to each activity.
// Sleep between 22h and 5h
// Eat at 7h, 13h and 18h
// The rest of the time is spent training.

// The output should look something like 
// It's 11h. Time to train!
// It's 12h. Time to train!
// It's 13h. Time to eat!

for (let i = 0; i <= 23; i++) {
    if( i === 11) {
        console.log("Time to It's 11h. Time to train!")
    } else if( i === 12) {
        console.log("Time to It's 11h. Time to train!")
    }else if(i === 13) {
        console.log("Time to It's 11h. Time to train!")
    } else {
        console.log(i)
    }
}
