//Do the below programs in anonymous function & IIFE
//1a.Print odd numbers in an array
//anonymous
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

//IIFE
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
//anonymous
var b=function(str){
    str=str.toLowerCase().split(" ");
    for(let i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
   return str.join(" "); 
}
console.log(b("gUvi gEek"));

//IIFE
(function(str1){
    str1=str1.toLowerCase().split(" ");
    for(let i=0;i<str1.length;i++){
        str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
    }
console.log(str1.join(" "))
})("gUvi GEek netWork")


//2b.Convert all the strings to title caps in a string array

var titlecase=(str2)=>{
    str2=str2.toLowerCase().split(" ");
    for(let i=0;i<str2.length;i++){
        str2[i]=str2[i].charAt(0).toUpperCase()+str2[i].slice(1);
    }
   return str2.join(" "); 
}
console.log(titlecase("Guvi geek neTwork privAte limIted"))


//1c.Sum of all numbers in an array
//anonymous
var sum=0;
var c=function(arr3){
for (var i=0;i<arr3.length;i++){
sum+=arr3[i]}
return sum;
}
console.log(c([2,5,8,10,12]))

//IIFE
add=function(ary){
    return ary.reduce((a,b)=>a+b)}
let ary=[3,2,1,8,6];
let sum9=add(ary);
console.log(sum9);


// 2c.Sum of all numbers in an array

var sums=0
var d=(arr5)=>{
    for (var i=0;i<arr5.length;i=i+1){
        (sums=sums+arr5[i])
       }
        return sums;
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

//1e.Return all the palindromes in an array
//anonymous
var j=function(arr5){
    var result4=[];
    for ( i=0;i<arr5.length;i++){
                var o=arr5[i].split("").reverse().join("");
                if (o===arr5[i])
                {
                result4.push(arr5[i])}
            }
                return result4;
}
console.log(j(["mom","red","level"]));

//IIFE
(function(arr8){
    var result8=[];
    for ( i=0;i<arr8.length;i++){
                var y=arr8[i].split("").reverse().join("");
                if (y===arr8[i])
                {
                result8.push(arr8[i])}
            }
            console.log(result8)                
})
(["carrot","radar","kik"]);

//2e.Return all the palindromes in an array

var palindrome=(arr9)=>{
    var result9=[];
    for ( i=0;i<arr9.length;i++){
                var l=arr9[i].split("").reverse().join("");
                if (l===arr9[i])
                {
                result9.push(arr9[i])}
            }
                return result9;
}
console.log(palindrome(["dad","mouse","redivider"]));

//1f.Return median of two sorted arrays of the same size.
//anonymous
const array1=[8,5,9,4,3]
const array2=[1,3,0,6]
const array3=[...array1,...array2]
array3.sort((a,b)=>a-b)

var v=function(){
let n=array3.length;
if (n%2===0){
    return ((array3(n/2-1)+array3(n/2))/2)
}
else{
    return array3[Math.floor(n/2)]
}}
console.log(v(array1,array2))

//1h.Rotate an array by k times
//annonymous
const k=3;
var u=function(array10){
    for (var i=0;i<k;i++){
    array10.push
    (array10.shift());
    }return array10
}
console.log(u([1,2,3,4,5]))

//IIFE
var l=3;
(function(array11){
    for (var i=0;i<l;i++){
        array11.push(array11.shift());
}
console.log(array11)
})([1,2,3,4,5])
