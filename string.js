let str = "soUmIck"

// string length

console.log( str.length)

// convert to upper case

console.log(str.toUpperCase())

// convert to lower case

console.log(str.toLowerCase())

// get the first character

console.log(str[5])

// get the last character

console.log(str[str.length-1])

// template literals

let name = "soumick roy"
let stream = `mca `
console.log(`my name is ${name} and my stream is ${stream}`)
console.log(typeof(name))

// string trim

let str1 = "   soumick hello  "  
console.log(str1.trim())

// string replace

let str2 = "hello world"
console.log(str2.replace("world", "javascript"))

// string concatenation

let str3 = "hello"
let str4 = "world"
console.log(str3 + " " + str4)
console.log(str3.concat(str4))

// string includes
let str5 = "pritam"
console.log(str5)
console.log(str5.includes("s"))
console.log(str5.at(0))

// string split
let str7 = str2.split(" ")
console.log(str7)
console.log(str7[0])

// string repeat

console.log(str3.repeat(3))

// string search
let str8 = "soumick roy"
console.log(str8.search(" "))

// string to array
let str9 = "debendra"
console.log(str9.split(""))

// Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
// eg: user name =

// “shradhakhapra”

// , username should be “@shradhakhapra13”

let fullName = prompt("Enter your full name: ")
let username = "@" + fullName + fullName.length;
console.log(username)

// Prompt the user to enter a sentence. Count the number of vowels in the sentence.

// eg: sentence = "Hello World"

// , vowel count should be 3

// let sentence = prompt("Enter a sentence: ")
// let vowelCount = 0
// for(let i=0; i<sentence.length; i++){
//     if(sentence[i]=='a'||sentence[i]=='e'||sentence[i]=='i'||sentence[i]=='o'||sentence[i]=='u'||sentence[i]=='A'||sentence[i]=='E'||sentence[i]=='I'||sentence[i]=='O'||sentence[i]=='U'){
//         vowelCount++
//     }
// }