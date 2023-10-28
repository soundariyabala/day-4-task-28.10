//Do the below programs in anonymous function & IIFE
//1a.Print odd numbers in an array

var result=[];
var a=function(arr){
    for (var i=0;i<arr.length;i=i+1)
    { 
        if (arr[i]%2!==0)
        {result.push(arr[i])}
    }
    return result
}
console.log(a([1,2,3,4,5]))


var result1=[];
(function(arr1){
    for (var i=0;i<arr1.length;i=i+1)
    { 
        if (arr1[i]%2!==0)
        {result1.push(arr1[i])}
    }
    console.log(result1)})([6,7,8,9,10])


//2a.Print odd numbers in an array in arrow functions

var result2=[];
var odd=(arr2)=>{
    for (var i=0;i<arr2.length;i=i+1)
{ 
    if (arr2[i]%2!==0)
    {result2.push(arr2[i])}
}
return result2
}
console.log(odd([11,12,13,14,15]))


//1b.Convert all the strings to title caps in a string array

var b=function(str){
    str=str.toLowerCase().split(" ");
    for(let i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
   return str.join(" "); 
}
console.log(b("guvi geek"));


(function(str1){
    str1=str1.toLowerCase().split(" ");
    for(let i=0;i<str1.length;i++){
        str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
    }
console.log(str1.join(" "))
})("guvi geek network")


//2b.Convert all the strings to title caps in a string array

var titlecase=(str2)=>{
    str2=str2.toLowerCase().split(" ");
    for(let i=0;i<str2.length;i++){
        str2[i]=str2[i].charAt(0).toUpperCase()+str2[i].slice(1);
    }
   return str2.join(" "); 
}
console.log(titlecase("guvi geek network private limited"))


//1c.Sum of all numbers in an array

var sum=0
var c=function(arr3){
for (var i=0;i<arr3.length;i++){
sum+=arr3[i]}
return sum;
}
console.log(c([2,5,8,10,12]))

add=function(ary){
    return ary.reduce((a,b)=>a+b)}
let ary=[3,2,1,8,6];
let sum9=add(ary);
console.log(sum9);


// 2c.Sum of all numbers in an array

var d=(arr5)=>{
    for (var i=0;i<arr5.length;i=i+1){
        (arr5[0]+arr5[1]+arr5[2]+arr5[3]+arr5[4])
       }
        return arr5;
    }
console.log(d([2,5,7,2,15]))

//1d.Return all the prime numbers in an array
var result3 = [3,4,5,6,7,8,10,11];
var e=function(num1){
    for(var i = 2; i < num1; i++){
        if(num1 % i === 0) return false;
    return num1 !== 1;}
}
var primearr1 =result3.filter(e);
console.log(primearr1); 
 
// 2d.Return all the prime numbers in an array

var arr6 = [1,2,3,4,5,6,7,8];
var Prime = (num) => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1;
}
var primeArr = arr6.filter(Prime);
console.log(primeArr);

//1h.Rotate an array by k times

function RightRotate(s, n, k)
{for (let i = 0; i < n; i++) {
        if (i < k) {
        console.log(s[n + i - k] + " ");
        }
        else {
            console.log((s[i - k]) + " ");
        }
    }
    console.log("<br>");
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
 console.log(RightRotate(Array, N, K));

