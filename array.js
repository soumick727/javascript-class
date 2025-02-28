let marks = [56,89,78,41,25]
console.log(marks)

// check the length of the array
console.log(marks.length)

let heroes = ["ironman", "thorn", "hulk", "antman", "blackPather", "falcon", "captain america"];
for(let i = 0; i < heroes.length; i++) 
    {
        console.log(heroes[i]);
    }
console.log(heroes)

// change one element in array
let mark = [56,89,78,41,25]
mark[0] = 20

console.log(mark)

// string -> immutable
// array -> mutable

// using for of 
// using for in

let cities = ["delhi", "kolkata", "hyderabad", "bengaluru", "gurgaon", "coimbatore"];
for(let city of cities)
{
    console.log(city);
}
// using touppercase
for(let city of cities)
{
    console.log(city.toUpperCase());
}
for(let city of cities)
    {
        console.log(city);
    }

for(let city in cities)
{
    console.log(cities[city]);
}

let markss = [123,34,67,45,23,32,21]
let sum = 0;

for(let m of markss)
{
    sum = sum + m  
}
let avg;
console.log("Sum of marks = ", sum)

avg = sum / markss.length;
console.log(avg)
console.log(`avg of the marks = ${avg}`)

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.

let items = [250,645,300,900,50];
for(let i=0;i<items.length;i++)
{
    let offer = items[i] / 10;
    items[i] -= offer;

}

console.log(items)

// Array method

// 1.push()

let numbers = [1,2,3,4,5];
numbers.push(6,7,8);
console.log(numbers)

// 2. pop()

numbers.pop();
numbers.pop();
console.log(numbers)

// 3. concat()

let num1 = [1,2,3];
let num2 = [4,5,6];

let concatArray = num1.concat(num2);
console.log(concatArray)

// 4. unshift()

let fruits = ["apple", "banana", "orange"];
fruits.unshift("mango", "grapes");
console.log(fruits)

// 5. shift()

fruits.shift();
fruits.shift();
console.log(fruits)

 // 6. slice() return a piece of the array
// it does not effect in the original array

let fruits1 = ["apple", "banana", "orange", "grape", "mango"];

let slicedFruits = fruits1.slice(1,3);

console.log(fruits1)
console.log(slicedFruits)

// 7. splice() change the content of an array

let fruits2 = ["apple", "banana", "orange", "grape", "mango"];

fruits2.splice(1, 2, "kiwi", "pineapple");

console.log(fruits2)

// 8. indexOf() return the first index at which a given element can be found in the array, or -1 if it is not present


let fruits3 = ["apple", "banana", "orange", "grape", "mango"];

console.log(fruits3.indexOf("banana"))


// Create an array to store companies -> “Bloomberg”
// ,
// “Microsoft”
// ,
// “Uber”
// ,
// “Google”
// ,
// “IBM”
// ,
// “Netflix”

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies.shift());

companies.splice(2, 1, "Ola");

companies.push("Amazon");

console.log(companies)

//looping through array
// forEach loop

let heroe = ["ironman", "thorn", "hulk", "antman", "blackPather", "falcon", "captain america"];

heroe.forEach(function(hero) {
    console.log(hero)
});