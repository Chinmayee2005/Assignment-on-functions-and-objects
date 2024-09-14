// If you practise all these problems..
// you will be strong in JS objects manipulations.


// Problem 1 : Part A

// Playing with JSON object"s Values:
//1
// Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
// Write a code to get the below details of Fluffyy so that
// I can take him to the vet.

let cat = {
name: "Fluffy",
activities: ["play", "eat cat food"],
catFriends: [
{
name: "bar",
activities: ["be grumpy", "eat sandwich"],
weight: 8,
furcolor: "white"
},
{
name: "foo",
activities: ["sleep", "pre-sleep naps"],
weight: 3
},]
}
console.log(cat);

// Basic Tasks to play with JSON


// Add height and weight to Fluffy
cat.height="10";
cat.weight="5";
// Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name="Fluffyy";
console.log(cat);
// List all the activities of Fluffyy"s catFriends.
for(let i=0;i<cat.catFriends.length;i++)
{for(let j of cat.catFriends[i].activities)
{
    console.log(j);
}
}
// Print the catFriends names.
for(let i=0;i<cat.catFriends.length;i++)
{
    console.log(cat.catFriends[i].name);
}
// Print the total weight of catFriends
let total=0;
for(let i=0;i<cat.catFriends.length;i++)
{
    total+=cat.catFriends[i].weight;
}
console.log(total);
// Print the total activities of all cats (op:6)
for(let i of cat.activities)
{
    console.log(i);
}
for(let i=0;i<cat.catFriends.length;i++)
{for(let j of cat.catFriends[i].activities)
{
    console.log(j);
}
}
// Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("sleep");
cat.catFriends[1].activities.push("eat");
// Update the fur color of bar
cat.catFriends[1].furcolor="black";

console.log(cat);

// Problem 1 : Part B :

// Iterating with JSON object"s Values

// Below is some information about my car. As you can see, I am not the best driver.
// I have caused a few accidents.
// Please update this driving record so that I can feel better about my driving skills.


let myCar = {
make: "Bugatti",
model: "Bugatti La Voiture Noire",
year: 2019,
accidents: [
{
date: "3/15/2019",
damage_points: "5000",
atFaultForAccident: true
},
{
date: "7/4/2022",
damage_points: "2200",
atFaultForAccident: true
},
{
date: "6/22/2021",
damage_points: "7900",
atFaultForAccident: true
},
]
}

// Question to work on the Iteration with JSON

// 1. Loop over the accidents array. Change atFaultForAccident from true to false.
for(let i=0;i<myCar.accidents.length;i++)
{
    myCar.accidents[i].atFaultForAccident=false;
}
console.log(myCar);
// 2. Print the dated of my accidents
for(let i of myCar.accidents)
{
    console.log(i.date);
}


// Real challenges starts here:bowtie:

// Problem 2 :

// Parsing an JSON object"s Values:

// 1.Write a function called "printAllValues" which returns an newArray of all the input object"s values.
// Input (Object):

// let object1 = {name: "RajiniKanth", age: 33, hasPets : false};
// Output:
// ["RajiniKanth", 33, false]

// Sample Function proto:

let obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {

// your code here
    let arr=Object.values(obj);
    return arr;
}
let values=printAllValues(obj);
console.log(values);

// Problem 3:

// Parsing an JSON object"s Keys:
// Write a function called "printAllKeys" which returns an newArray of all the input object"s keys.
// Example Input:
// {name : "RajiniKanth", age : 25, hasPets : true}
// Example Output:
// ["name", "age", "hasPets"]
// Sample Function proto:

function printAllKeys(obj) {
// your code here
    let arr=Object.keys(obj);
    return arr;
}
let keys=printAllKeys(obj);
console.log(keys);

// Problem 4 :

// Parsing an JSON object and convert it to a list:

// Write a function called "convertObjectToList" which converts an object literal into an array of arrays.
// Input (Object):
// let object = {name: "ISRO", age: 35, role: "Scientist"};
// Output:
// [["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
// Sample Function proto:
let obj2 = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
// your code here
    let arr=Object.entries(obj);
    return arr;
}
let arr_keyvalue=convertListToObject(obj2);
console.log(arr_keyvalue);

// Problem 5: ( 5 mins):

// Parsing a list and transform the first and last elements of it:
// Write a function "transformFirstAndLast" that takes in an array, and returns an object with:
// 1) the first element of the array as the object"s key, and
// 2) the last element of the array as that key"s value.

// Input (Array):
// let array = ["Hi", "I", "am", "Geek"];
// Output:
// let object = {
// HI : "Geek"
// }
// Sample Function proto:
let arr = ["HI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    let first=arr[0];
    let last=arr[arr.length-1];
    let newObject={
        first:last,
    }
    return newObject;
}
let arr_firstlast=transformFirstAndLast(arr);
console.log(arr_firstlast);


// Problem 6 :

// Parsing a list of lists and convert into a JSON object:
// Write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
// Input (Array):
// let array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
// Output:
// let object = {
// make : "Ford"
// model : "Mustang",
// year : 1964
// }
// Sample Function proto:
let arr_to= [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
let newObject = Object.fromEntries(arr);
return newObject;
}
let arr_fromarray=fromListToObject(arr_to);
console.log(arr_fromarray);

// Problem 7 :

// Parsing a list of lists and convert into a JSON object:
// Write a function called "transformGeekData" that transforms some set of data from one format to another.
// Input (Array):
// let array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

// Output:
// [
// {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
// {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
// ]

// Sample Function proto:
let arr_transform= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    let transformEmployeeList = [];
//Your code
    transformEmployeeList[0]=Object.fromEntries(arr[0]);
    transformEmployeeList[1]=Object.fromEntries(arr[1]);
    console.log(transformEmployeeList);
}
transformEmployeeData(arr_transform);

// Problem 8: (10 — 20 mins):

// Parsing two JSON objects and Compare:

// Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

// Write an "assertObjectsEqual" function from scratch.
// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
// It is OK to use JSON.stringify().

// Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

// Success Case:
// Input:
// let expected = {foo: 5, bar: 6};
// let actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, "detects that two objects are equal");
// Output:
// Passed

// Failure Case:
// Input:
// let expected = {foo: 6, bar: 5};
// let actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, "detects that two objects are equal");
// Output:
// FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}

// let expected = {foo: 5, bar: 6};
// let actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
// your code here
    
}

// Problem 9 :

// Parsing JSON objects and Compare:

// I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer
let securityQuestions = [
{
question: "What was your first pet's name?",
expectedAnswer: "FlufferNutter"
},
{
question: "What was the model year of your first car?",
expectedAnswer: "1985"
},
{
question: "What city were you born in?",
expectedAnswer: "NYC"
}
]
function chksecurityQuestions(securityQuestions,questions,answer) {
// your code here
    for(let i in securityQuestions)
    {
        if(i.question==questions && i.expectedAnswer==answer)
        {
            return true;
        }
    }
    return false;
}
// //Test case1:

let ques = "What was your first pet's name?";
let ans  =  "FlufferNutter";
let status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true

// //Test case2:

let ques2 = "What was your first pet's name?";
let ans2  =  "DufferNutter";
let status2 = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status2); // flase

// Problem 10 :

// Parsing JSON objects and Compare:
// Write a function to return the list of characters below 20 age

let students = [
{
name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
{name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
{name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
{name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
{name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
{name: "Devdas",age: 56}
];
function returnMinors(arr)
{   let arr2=[];
    for(i of arr)
    {
        if(i.age<20)
        {
            arr2.push(i);
        }
    }
    console.log(arr2);
}
returnMinors(students);
