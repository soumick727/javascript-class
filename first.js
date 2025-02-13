//console.log('hello world');
/*console.log('soumick roy');

fname = "soumick roy";
console.log(fname);*/
// x=2;
// y=8;
// z=x+y;
// console.log(z)

// const student = {
//     fullName : "soumick" ,
//     age: 22,
//     cgpa: 8.2,
//     isPass: true
// } 

// student["age"] = student["age"] + 1
// console.log(student)
// //ternary operator
// let age = 17;
// let result= age>=18 ? "adult" : "not adult";
// console.log(result);

// let _age = 17;
// _age>=18 ? console.log("adult") : console.log("not adult");

/*alert("hello soumick");

let name = prompt("please type something: ");
console.log(name)*/

//loop in JS
// for (let count=0; count<1000; count++){
//     console.log("soumick");
// }
// console.log("loop has ended");

// //while loop
// let i = 0;
// while(i<=5){
//     console.log("i = ",i);
//     i++;
// }
// console.log("loop has ended");

//for-of loop

// let str = "souumiicck";
// let size = 0;
// for(let i of str){
//     console.log("i = ",i);
//     size++;
// }
// console.log(size)

//for-in loop

// const student1 = {
//     fullName : "soumick" ,
//     age: 22,
//     cgpa: 8.2,
//     isPass: true
// } 
// for(let i in student1){
//     console.log(i, " = ",student1[i])
// }

//string
// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let str = "soumick roy";
// x=str.toUpperCase();
// console.log(x);

//Array
// let marks = [23,45,67,12,34,56];
// console.log(marks)
// console.log(marks.length)
// for(let x=0;x<marks.length;x++){
//     console.log(marks[x]);
// }

// let marvelHeroes = ["thor","spiderman","ironman"];
// let x = marvelHeroes.shift("antman");
// console.log(x);


// let marvelHeroes1 = ["thor","spiderman","ironman"];
// let val = marvelHeroes1.shift();
// console.log(val);

// let array = [1,2,3,4,5,6];
// array.splice(2,0,101);
// console.log(array);

//function

// function myFunction(msg) {
//     console.log(msg);
// }
// let i = "my name is soumick";
// myFunction(i)

// function sumFunction(a,b){
//     sum=a+b;
//     console.log(sum);
// }
// sumFunction(2,3)


//arrow function
// const addFunction = (x,y) =>{
//     return x+y;
// }
// console.log(addFunction(4,5))

// //map function
// let nums = [34,23,12,23,35];
// nums.map((val) =>{
//     console.log(val)
// })

// let num = [34,23,12,23,35];
// let x = num.map((val) =>{
//     return val;
// })
// console.log(x)

// //filter function

// let arr = [34,23,12,23,35];

// let evenArr = arr.filter((val) => {
//     return val % 2 ===0;
// });
// console.log(evenArr);


// reduce function

// let arr = [1,2,3,4]
// let output = arr.reduce((res,curr) => {
//     return res + curr;
// });
// console.log(output);

// let arr1 = [5,3,76,87,78,9];
// const output1 = arr1.reduce((prev,curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output1);