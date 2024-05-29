// const button = document.getElementById('input-btn');
// button.addEventListener('click', function() {
//     console.log('button cliked')
// })

// function saveLead() {
//     console.log('button clicked')
// }
let myLeads = ["www.test.com", "www.perisdumb.com", "www.fart.com"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// inputBtn.addEventListener('click', function() {
//     const lead = inputEl.value;
//     myLeads.push(lead);
//     inputEl.value = "";
//     console.log(myLeads);
// }) Also works, but more chunky

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
}) ;

for (let i = 0; i < myLeads.length; i++) 
    ulEl.textContent += myLeads[i] + " "
    
