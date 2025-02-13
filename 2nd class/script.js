// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.
// let n = prompt("Enter a number: ");
// (n%5==0)?console.log("multiple of 5"):console.log("not a multiple of 5")


// Qs2. Write a code which can give grades to students according to their scores:

                // 80-100, A
                // 70-89, B
                // 60-69, C
                // 50-59, D
                // 0-49, F

let  n = prompt("Enter a number: ");
let grade;
if(n>=80 && n<=100)
{
    grade = "A";
}

else if(n>=70 && n<=89)
    {
        grade = "B";
    }
    else if(n>=60 && n<=69)
        {
            grade = "C";
        }
        else if(n>=50 && n<=59)
            {
                grade = "D";
            }
            else if(n>=0 && n<=49)
                {
                    grade = "F";
                }
console.log("Grade: ", grade);