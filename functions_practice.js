// JavaScript Functions - Warmup Problems

// Problem: 1

// Write a function called “addFive".
// Given a number, “addFive" returns 5 added to that number.
// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0

let num = 10;
function addFive(num) {
    return num+5;
}

let result = addFive(num)
console.log(result); 


// Problem:2

// Write a function called “getOpposite".
// Given a number, return its opposite

// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a");
// getOpposite(5.5);

// Output:
// -5
// 0
// 5
// -1
// -1

let num2 = 5;
function getOpposite(num2) 
{
if (typeof num2 === 'number')
 { return -num2; 
} 
else 
{ return -1; 
}
}
let result2 = getOpposite(num2)
console.log(result2);

// Problem:3

// Fill in your code that takes an number minutes and converts it to seconds.

// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120

let min = 5;
function toSeconds(min) {
   return min*60;
}
let secs = toSeconds(min)
console.log(secs);

// Problem:4

// Create a function that takes a string and returns it as an integer.

// Examples
// toInteger(“6") ➞ 6
// toInteger(“1000") ➞ 1000
// toInteger(“12") ➞ 12

let mystr = "5";
function toInteger(mystr) 
{
  return Number(mystr);
}

let myint = toInteger(mystr)
console.log(myint); 


// Problem:5

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2

let myint2 = 0;
function nextNumber(myint) 
{
return myint+1;
}

let myNextint = nextNumber(myint2)
console.log(myNextint); 


// Problem:6

// Create a function that takes an array and returns the first element.

// Examples
// getFirstElement([1, 2, 3]) ➞ 1
// getFirstElement([80, 5, 100]) ➞ 80
// getFirstElement([-500, 0, 50]) ➞ -500

let arr = [1, 2, 3];
function getFirstElement(arr) 
{
 return arr[0];
}
let data = getFirstElement(arr)
console.log(data); 

// Problem:7

// Convert Hours into Seconds

// Write a function that converts hours into seconds.

// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400

let arr2 = [1, 2, 3];
function hourToSeconds(arr) {
for(let i=0;i<arr.length;i++)
 console.log(arr[i]*3600);
}
hourToSeconds(arr2);

// Problem:8

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
function findPerimeter(num1,num2) {
   return 2*(num1+num2)
}
let peri = findPerimeter(6,7)
console.log(peri);

// Problem:9

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// 83 + 34 = 117
function lessThan100(num1,num2) {
    if(num1+num2<100)
    {
      return true;
    }
    else return false;
}
let res = lessThan100(22,15)
console.log(res)

// Problem:10

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
function remainder(num1,num2) {
 return num1%num2
}
let res2 = remainder(1,3)
console.log(res2);

// Problem:11

// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// CountAnimals(2, 3, 5) ➞ 36
// CountAnimals(1, 2, 3) ➞ 22
// CountAnimals(5, 2, 8) ➞ 50
function CountAnimals(tur,horse,pigs) {
  return tur*2+horse*4+pigs*4;
}
let legs = CountAnimals(2,3,5);
console.log(legs);

// Problem:12

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600.t
// frames(10, 25) ➞ 15000
function frames(num1,num2) {
  
}
// let fps = frames(1,2)

// Problem:13

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false
function divisibleByFive(num1) {
  if(num1%5==0) return true;
  else  return false;
}
let divisible = divisibleByFive(5);
console.log(divisible);

// Problem :14

// Write a function called “isEven".
// Given a number, “isEven" returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h");

// Output:
// true
// true
// false
// -1

function isEven(num){
// your code here
    if(typeof num==='number')
    {
      if(num%2==0) return true;
      else return false;
    }
    else return -1;
}
let even = isEven(5);
console.log(even);

// Problem:15

// Write a function called “areBothOdd".
// Given 2 numbers, “areBothOdd" returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);

// Output:
// true
// flase
// flase
// flase

function areBothOdd(num1, num2){
// your code here
  if(num1%2!=0 && num2%2!=0)return true;
  else return false;
}
let res3=areBothOdd(1,4);
console.log(res3);

// Problem:16

// Write a function called “getFullName".
// Given a first and a last name, “getFullName" returns a single string with the given first and last names separated by a single space.

// Input:
// getFullName(“GUVI", “GEEK");
// getFullName(“GUVI", );
// getFullName(, “GEEK");
// getFullName(“", “");

// Output:
// “GUVI GEEK"
// “GUVI"
// “GEEK"
// “"

function getFullName(firstName, lastName){
// your code here
  return (firstName+" "+lastName);
}
let name=getFullName("GUVI","GEEK");
console.log(name);

// Problem:17

// Write a function called “getLengthOfWord".
// Given a word, “getLengthOfWord" returns the length of the given word.

// Input:
// getLengthOfWord(“GUVI");
// getLengthOfWord(“");
// getLengthOfWord();
// getLengthOfWord(9);

// Output:
// 4
// 0
// -1
// -1
function getLengthOfWord(word1){
// your code here
  if(typeof word1!=="string")return -1;
  return word1.length;
}
let length=getLengthOfWord();
console.log(length);

// Problem:18

// Write a function called “isSameLength".
// Given two words, “isSameLength" returns whether the given words have the same length.

// Input:
// isSameLength(“GUVI", “GEEK");

// Output:
// true

function isSameLength(word1, word2){
// your code here
  if(word1.length==word2.length)return true;
  return false;
}
let res4=isSameLength("GUVI","GEE");
console.log(res4);

// Problem:19

// Create a function to calculate the distance between two points defined by their x, y coordinates
// console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{

}

// Problem:20

// Write a function called “getNthElement".
// Given an array and an integer, “getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

// Input:
// getNthElement([1, 3, 5], 1);

// Output:
// 3
function getNthElement(array,n){
// your code here
  return array[n];
}
let get=getNthElement([1,3,5],1);
console.log(get);

// Problem:21

// Write a function called “getLastElement".
// Given an array, “getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

// Input:
// getLastElement([1, 2, 3, 4]);

// Output:
// 4

function getLastElement(array){
// your code here
  let length=array.length;
  if(length==0) return -1;
  return array[length-1];//(equals to array.length)
}
let get2=getLastElement([1,2,3,4]);
console.log(get2);

// Problem:22

// Write a function called “getProperty".
// Given an object and a key, “getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

// let obj = {
// mykey: “value"
// };

// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);

// Output:
// value
// NA
let obj ={
  "mykey":"value"
}
function getProperty(obj, key) {
// your code here
  return obj[key];
}
let get3=getProperty(obj,"mykey");
console.log(get3);

// Problem:23

// Write a function called “addProperty".
// Given an object and a key, “addProperty" adds a new property on the given object with a value of true.

// let obj = {
// }

// Input:
// addProperty(obj, “mykey");

// Output:
// {
// mykey: true
// }
let obj2=
{};
function addProperty(obj, key){
    obj2[key]=true;
}
addProperty(obj2,"myKey");
console.log(obj2);

// Problem:24

// Write a function called “removeProperty".
// Given an object and a key, “removeProperty" removes the given key from the given object.

// Input:
// removeProperty(obj, “name");

// Output:
// undefined

function removeProperty(obj, key){
// your code here
  delete obj.key;
}
removeProperty(obj2,'myKey');
console.log(obj2);

// Problem:25

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let ar22 = function countPositivesSumNegatives(arr) {
  let count_positive=0;
  let count_negative=0;
  for(i of arr)
  {
    if(i<0) count_negative++;
    else count_positive++;
  }
  ar22[0]=count_positive;
  ar22[1]=count_negative;
  for(let i=2;i<arr.length+2;i++)
  {
    ar22[i]=arr[i-2];
  }
  return ar22;
}
let arr3=ar22([-5, 10, -3, 12, -9, 5, 90, 0, 1]);
console.log(arr3);

// Problem:26

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
// your code here
}
// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let ar222 = getPositives(ar);
// console.log(ar222);

// Problem:27

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]

// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)

// Output:
// 1
// 1,2
// 1,2,4
var powers=[];
function powersOfTwo(n){

  for(let i=0;i<=n;i++)
  {
    powers[i]=Math.pow(2,i);
  }
  return powers;
}
let powers2=powersOfTwo(3);
console.log(powers2);

// Problem:28

// Find the maximum number in an array of numbers
function findMax(ar)
{
  let max=ar[0];
  for(let i=1;i<ar.length;i++)
  {
    if(ar[i]>max) max=ar[i];
  }
  return max;
// your code here
}
let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = findMax(ar);
console.log("Max:"+max);


// // Problem:29

// // Print the first 100 prime numbers
// // printPrimes(100);

// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes)
// {
// let n = 0;
// let i = 2;

// while(n < nPrimes)
// {
// if (isPrime(i))
// {
// console.log(n, " → ", i);
// n++;
// }

// i++;
// }
// }
// // Returns true if a number is prime
// function isPrime(n)
// {
// // your code here
//     for(let i=2;i<=Math.sqrt(n);i++)
//     {
//       if(n%i==0) return false;    }
//     return true;
// }
// printPrimes(5);

// Problem:30

// Create a function that will return in an array the first “nPrimes" prime numbers greater than a particular number “startAt"
// console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
// your code here
isPrime(i)
}
// Returns true if a number is prime
function isPrime(n)
{
// your code here
}

// Problem:31

// Reverse a string

function reverseString(s)
{
  // your code here 
  let array=s.split("");
  let rev=array.reverse();
  let revs=rev.join("");
  return revs;
}
let s = reverseString("JavaScript");
console.log(s);

// Problem:32

// Create a function that will merge two arrays and return the result as a new array
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
let merge_array = mergeArrays(ar1, ar2);
console.log(merge_array);
function mergeArrays(ar1, ar2)
{
let result = [];
//this will add the first array to the result array
for(let el of ar1)
{
result.push(el);
}

//Some piece of code goes here
for(let el of ar2)
{
result.push(el);
}



return result;
}

// Problem:33

//Calculate the sum of numbers received in a comma delimited string
sumCSV("1.5,2,3");

function sumCSV(s)
{
 // your code here
    let array=s.split(",");
    let sum=0;
    for(let i of array)
    {
      sum=sum+Number(i);
    }
    console.log(sum);
}



