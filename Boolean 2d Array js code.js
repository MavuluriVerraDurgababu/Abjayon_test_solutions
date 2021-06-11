var maxRowNum = function(arr){
 var maxRowNum = 0;
 loop1:for(var i=0; i <arr.length; i++) {
 loop2:for(var j=0; j <arr.length; j++) {
    if(arr[j][i] == 1) {
      maxRowNum = j
      break loop1;
    }
 }
 }
 return maxRowNum;
}
var result = maxRowNum([[0,1,1,1], [0,0,1,1], [1,1,1,1],[0,0,0,0]]);
console.log(result);