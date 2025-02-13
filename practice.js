//practice 1
// const product = {
//     title: "Ball pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };
// console.log(product)

//practice 2
// let x = prompt("Enter a number: ")
// x%5===0 ? console.log("multiple of 5") : console.log("not a multiple of 5")

//practice 3

// let score = prompt("enter the score: ");
// if (score >=90 && score<=100){
//     console.log("Grade A")
// }
// else if (score >=70 && score<=89){
//     console.log("Grade B")
// }
// else if (score >=60 && score<=69){
//     console.log("Grade C")
// }
// else if (score >=50 && score<=59){
//     console.log("Grade D")
// }
// else{
//     console.log("Grade F")
// }

//practice 4
// for(let i = 0; i<=100; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

//practice 5

// let gameNum=25;
// var i = prompt("Guess the number: ");
//  while(i!=gameNum){

//  }
//  console.log("congrats , you have entered the right number ")

//practice 6
// let fullName = prompt("Enter full name: ")
// let userName = "@" + fullName + fullName.length;
// console.log(userName)

//practice 7
// let mark = [85,97,44,37,76,60];
// let x = mark.length;
// let sum=0;
// for(let i of mark){
//     sum+=i;
// }
// console.log(sum)
// console.log("average = ",sum/x)
//practice 8
// let item = [250,645,300,900,50];
// let i=0;
// for(let val of item){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     item[i] = item[i] - offer;
//     console.log(`value after the offer= ${item[i]}`);
//     i++;
// }

// let items = [250,645,300,900,50];
// for(let i=0;i<items.length;i++)
// {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

//practice 9
// const countVowel = (string) =>{
//     let count=0
//     for ( const char of string){
//         if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
//         {
//             count+=1 
//         }        
//     }
//     console.log(count);
// }
// console.log(countVowel('soUmick'))

//practice 10
// let num = [2,4,1,5,7];
// num.forEach((nums) => {
//     console.log(nums*nums);
// })

// practice 11
// let marks = [87,33,64,99,86,91];
// let x = marks.filter((value) => {
//     if(value>90)
//     {
//         return value;
//     }
// });
// console.log(x);

// practice 12

let n = prompt("enter a number: ");
let arr = [];

for (let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr)

let sum = arr.reduce((res,curr) => {
    return res + curr;
});
console.log(sum)

let mul = arr.reduce((res,curr) => {
    return res * curr;
});
console.log(mul)