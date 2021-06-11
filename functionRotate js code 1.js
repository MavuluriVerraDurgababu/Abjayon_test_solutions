var fn=function(arr,d,n){
    let i=1;
    while(i<=d){
        arr.push(arr.shift());
        i++;            
    }
    return arr;    
}
var result=fn([1,2,3,4,5],2,5);
console.log(result)