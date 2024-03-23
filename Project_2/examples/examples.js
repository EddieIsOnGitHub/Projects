// // Define three functions
// function firstTask() {
//     console.log("Task 1");
//   }
  
//   function secondTask() {
//     console.log("Task 2");
//   }
  
//   function thirdTask() {
//   console.log("Task 3");  
//   }
  
//   // Execute the functions
//   thirdTask();
//   firstTask();
//   secondTask();



// function someLongRunningFunction() {
//     let start = Date.now();
//     while (Date.now() - start < 5000) {
//         // do nothing
//     }
//     return "Hello";
// }

// console.log('Starting...');

// let result = someLongRunningFunction();
// console.log(result);

// console.log('...Finishing');




// console.log("Start of script");

// setTimeout(function() {
//   console.log("First timeout completed");
// }, 2000);

// console.log("End of script");



// // Declare function
// function fetchData(callback) {
//     setTimeout(() => {
//       const data = {name: "John", age: 30};
//       callback(data);
//     }, 3000);
//   }
  
//   // Execute function with a callback
//   fetchData(function(data) {
//     console.log(data);
//   });
  
//   console.log("Data is being fetched...");
  

//   // Initialize a promise
// const myPromise = new Promise(function(resolve, reject) => {});
// console.log(myPromise);

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello from the promise!");
//     }, 2000);
// });
// // console.log(myPromise)

//  myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     //code here will be executed regardless of the status
//     //of a promise (fulfilled or rejected)
//   });

// console.log(myPromise)



fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => processData(data))
    .then(processedData => {
        // do something with the processed data
    })
    .catch(error => console.log(error))


