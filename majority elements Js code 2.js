var majorityElem = function(arr) {
var tempArray = [];
 
for(var a=0; a< arr.length; a++) {
if(tempArray.indexOf(arr[a]) < 0) {
 tempArray.push(arr[a])
}
}
var mE = null;
for(var i=0; i <tempArray.length; i++){
 var frequency = 0;
 
 for(var j=0; j < arr.length; j++) {
  if(tempArray[i] == arr[j]) {
  frequency++;
  }
 }
 if(frequency > arr.length/2) {
  mE = tempArray[i];
  break;
 }
}
return mE;
}
var result = majorityElem([3,3,4,2,4,4,2,4,4]);
console.log(result);