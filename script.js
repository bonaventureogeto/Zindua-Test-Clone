document.getElementById("calculate").onclick = function rectangle() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);

    let area = length * width;

    let perimeter = (length + width) * 2;

    document.getElementById("area").textContent = "The area is: " + area;
    document.getElementById("perimeter").textContent = "The perimeter is: " + perimeter;
}


// function declaration
function hello(name, age) {
    console.log("Hello, " + name + ". You're " + age + " Years old."); // concertanation
}

hello("Barrack", 23); // calling a function

// write a function that prints the area and perimeter of a reactangle to the console.
// hint: the function should take length and width as parameters

function rectangle(length, width) {
    let area = length * width;
    let perimeter = (length + width) * 2;

    return ("The area is " + area + " and the perimeter is " + perimeter + ".")
}

console.log(rectangle(100, 50));

// if statements

let age = 23;


if (age >= 18) {
    console.log("You're eligible to vote!")
} else if (age > 115) {
    console.log("You're a too old!!")
} else if (age < 18) {
    console.log("You're too young!")
} else {
    console.log("You're not eligible to vote!")
}


// write a JavaScript program that check whether a number is even

let number = 20;

if (number%2 === 0) {
    console.log(number + " is even!")   
} else {
    console.log(number + " is odd!")
}


// write a JavaScript program for autgrading students. Get user input

document.getElementById("autograde").onclick = function grading() {

    let score = parseInt(document.getElementById("score").value);

    if (score >= 70 && score <= 100) {
        document.getElementById("grade").textContent = "Grade: A";
    } else if (score >= 60 && score < 70) {
        document.getElementById("grade").textContent = "Grade: B";
    } else if (score >= 50 && score < 60) {
        document.getElementById("grade").textContent = "Grade: C";
    } else if (score >= 40 && score < 50) {
        document.getElementById("grade").textContent = "Grade: D";
    } else if (score < 40 && score > 0) {
        document.getElementById("grade").textContent = "Grade: FAIL";
    } else {
        document.getElementById("grade").textContent = "Grade: INVALID SCORE";
    }
}

// grading(1000)


// for loops
// for (let num = 0; num <= 10; num++){
//     if (num % 2 === 0) {
//         console.log(num + " is even")
//     }
// }

// 0
// 0 + 1 = 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 1 = 4

// 0, 1, 1, 2, 3, 5, 8, 13, 21

for (let age = 1; age < 18; age++){
    if (age === 10) {
        console.log("I'm a decade old!")
    }
}

// write a JavaScript program that prints multimples of 3 between 1 and 100

for (let num = 1; num < 100; num++){
    if (num % 3 === 0) {
        console.log(num + " is a multiple of 3")
    }
}

// sum of nums from 1 to 10

let sum = 0;

for (let num = 0; num <= 10; num++){
    sum = sum + num;
}

console.log(sum);

// write a JavaScript program that prints the sum of prime mumbers between 1 and 100
// prime number -> a number divisible by 1 and itself

for (let i = 2; i < 100; i++){
    let isPrime = true;

    // check for non primes
    for (let j = 2; j < i; j++){
        if (i % j == 0)
            isPrime = false;
    }

    if (isPrime) {
        console.log(i)
    }
}


// 