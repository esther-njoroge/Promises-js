Que1: 
//: Write an asynchronous function that accepts a message string and a delay time in milliseconds.The function
// should log the message to the console after the specified delay time.
const promise = new Promise(function(resolve) {
    setTimeout(function() {
     const introduction = "I am a student at AkiraChix";
     resolve(introduction);
     console.log({greeting})
    }, 3000);
   });


async function message(){
    console.log("I am a student at AkiraChix");
   };
setTimeout(message,3000);

   Que2:
    //You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given
   // a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
   async function getUserData(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Data for user Id ${id}`);
      }, 2000);
    });
  }
  const userId = [1, 2, 3, 4, 5];
  async function fetchAndLogData(userId) {
    const results = await userId.reduce(async (pastPromise, id) => {
      await pastPromise;
      const userData = await getUserData(id);
           console.log(userData);
      return getUserData(id + 1);
    }, Promise.resolve());
    console.log('Data for all users has been logged.');
  }
fetchAndLogData(userId);

Que3:
//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if
//there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom
// error message if there's an error.
async function performTask() {


    return new Promise((resolve, reject) => {
    
    resolve('Task is successful');
    reject('There is an error')
    
    });
}
    
    
    const newTask = async ()=>{
    
    try{
    await performTask
    console.log('message: Task is successful');
    }catch{
    console.log('error: There is an error');
    }
    }
    newTask();


Que4:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    
    resolve(`Task "${taskName}" succeeded`);
    } else {
    
    reject(new Error(`Task "${taskName}" failed`));
    }
    });
    }
    async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 3; attempt => retries; attempt++) {
    try {
    await unstableTask(taskName, failureProbability);
    console.log(`Attempt ${attempt}: task "${taskName}" succeded`);
    return;
    } catch (error) {
    console.error(`Attempt ${attempt}: ${error.message}`);
    }
    }
    console.log(`All ${retries} attempts failed "${taskName}"`);
    }
    
    executeWithRetry('Runtime', 3, 0)
