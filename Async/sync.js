Set.prototype.newMethod = function(setB) {
  var  newResult = new Set();

  for (var item of setB) {
    if(this.has(item)) {
      newResult.add(item);
    }
  }
  return newResult;
}

function result(a1, a2) {
  var a1 = new Set([...a1]);
  var a2 = new Set([...a2]);
  return a1.newMethod(a2)
}

var arrA = [1,2,3,4]
var arrB = [3,4,5,6]
var myresult = result(arrA, arrB)

console.log(myresult)