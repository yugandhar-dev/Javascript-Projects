// Asynchronous example

console.log("start");

setTimeout(() => {
  console.log("inside timeout function");
}, 2000);

console.log("end");

// setTimeout() is an example of asynchronous as rest of the flow will be executed without waiting for it to complete.

// Output is as below

// start
// end
// inside timeout function
