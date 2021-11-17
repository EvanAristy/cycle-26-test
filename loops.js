// =========== LOOPS =============

// Definition: A sequence of instructions that are repeated for either certain number of times or until a condition is met

// Syntax:
// for(statement 1; statement 2; statement 3) {
  // code block to be executed
//}

// Statement 1: executed before the loop - this is where code block starts
// Statement 2: condition for running the loop (the code block)
// Statement 3: Executed each time AFTER the loop (the code block) has been executed

// Task: loop that iterates from 0 to 9
//statement 1 : declare our iterator
//Why 0? in programing we like to start count at 0
//  i++ i=i+1  i+=1 are all the same

for(let i = 0; i < 10; i++) {
    console.log(i)
    }
    
    //Task: loop from 10 to 1
    
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }
    
    
    //Task:write a loop that putputs 1,3,5,7,9
    
    for (let i = 1; i < 10; i += 2) {
        console.log(i)
    }
    
    //Task: write a loop that outputs 2,4,6,8
    
    for (let i = 2; i <= 10; i +=2){
        console.log(i)
    }
    