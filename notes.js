// let person = {
//     name: "Christopher",
//     age: 23,
//     country: "U.S.A"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
// }

// logData()

// let age = 23
// if (age < 6) {
//     console.log("Free")
// } else if (age >= 6 && age <= 17) {
//     console.log("Child Discount")
// } else if (age >= 18 && age <= 26) {
//     console.log("Student Discount")
// } else if (age >= 27 && age <= 66) {
//     console.log("Full Price")
// } else {
//     console.log("Senior Discount")
// }

// let largeCountries = ["china", "india", "usa", "indonesia", "pakistan"]

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log(largeCountries[i]);
// }

// let largeCountries = ["tuvalu", "india", "usa", "indonesia", "monacco"]

// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("china");
// largeCountries.push("pakistan")

// console.log(largeCountries)

// let dayOfMonth = 13;
// let weekday = "Friday";

// if ("Friday" && 13) {
//     console.log("💩")
// }
// or
// if (weekday === "Friday" && dayOfMonth=== 13) {
//     console.log("💩")
// }

// let hands = ["rock", "paper", "scissor"];

// let randomIndex = Math.floor(Math.random() * hands.length);

// let randomHand = hands[randomIndex];

// console.log(randomHand);

// or

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * hands.length);
//     return hands[randomIndex]
// }

// console.log(getHand)

// let color = ["white", "blue", "black", "green", "red"]

// function colorRandom() {
//     let randomIndex = Math.floor(Math.random() * color.length);
//     return color[randomIndex]
// }

// console.log(colorRandom())

// let piece = ["blue", "red", "red", "blue", "red"]
// let blueShelf = document.getElementById("blue-shelf")
// let redShelf = document.getElementById("red-shelf")

// function sortPieces() {
//     blueShelf.textContent = '';
//     redShelf.textContent = '';

//     for (let i = 0; i < piece.length; i++) {
       
//         if (piece[i] === "blue") {
            
//             blueShelf.textContent += piece[i] + ' ';
//         } else if (piece[i] === "red") {
            
//             redShelf.textContent += piece[i] + ' ';
//         }
//     }
// }

// sortPieces()



// {/* <html>
//     <head>
//         <link rel="stylesheet" href="index.css">
//     </head>
//     <body>
//         <div id="box">Open the box!</div>
//         <script src="index.js"></script>
//     </body>
// // </html> */} this goes for this button listener

// const box = document.getElementById('box');
// button.addEventListener('click', function() {
//     console.log('box opened')
// }) 

// if possible always use const, let is the backup

// const playerName = "Chris"
// let credits = 45

const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days"

shippingCost = 15;
shippingTime = "7-14 days";

const fullPrice = basePrice - discount + shippingCost;

console.log("Total cost: " + fullPrice + ". it will arrive in " +shippingTime)
