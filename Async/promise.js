const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("in set timeout");
     //resolve({ user: "yugandhar" });
    reject(new Error("user not exists"));
  });
});

promise
  .then((user) => console.log(user))
  .catch((err) => console.log(err.message));
