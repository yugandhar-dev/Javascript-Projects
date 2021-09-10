console.log("start");
const user = loginUser("yugi@gmail.com", "asdf", (user) => {
  console.log(user);
});
function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 3000);
}

var calc = ((n1, n2) => {
  var calc = (n1 + n2);
  return calc;
}) (2,2);

console.log("finish");
