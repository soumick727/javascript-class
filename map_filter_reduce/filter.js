let age = [32,33,16,40];
let answear =  age.filter((number)=>{
    return number > 18;
})
console.log(answear);

let arr = [6,1223,45,865,123,7898,345,6554,235,2344,24]
let answer1 = arr.filter((number)=>{
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(answer1);

let array = ['apples', 'banana', 'lichi', 'mango']

let answer2 = array.map((fruit)=>{
    return fruit.toUpperCase()
})

let x = ['apples', 'banana']
console.log(typeof(x))


let y = [12,33,16,40]
for(let z of y)
{
    console.log(z);
}

// let person = {fname:"John", lname:"Doe", age:25};
// for(let x of person)
// {
//     console.log(person[x]);
// }

let obj = {name: "John", age: 30, city: "New York"};

for(let key in obj)
{
    console.log(obj[key]);
}

let obj1 = ['apples', 'banana', 'lichi', 'mango']
for(let x of obj1)
{
    console.log(x);
}

 