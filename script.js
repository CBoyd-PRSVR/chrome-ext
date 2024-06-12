// const button = document.getElementById('input-btn');
// button.addEventListener('click', function() {
//     console.log('button cliked')
// })

// function saveLead() {
//     console.log('button clicked')
// }
// let myLeads = [];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// inputBtn.addEventListener('click', function() {
//     const lead = inputEl.value;
//     myLeads.push(lead);
//     inputEl.value = "";
//     console.log(myLeads);
// }) Also works, but more chunky

// inputBtn.addEventListener('click', function() {
//     myLeads.push(inputEl.value);
//     inputEl.value = "";
//     renderLeads()
// }) 


// function renderLeads() {
//     let listItems = " ";
//     for (let i = 0; i < myLeads.length; i++) {
//         function renderLeads() {
//             let listItems = "";
//             for (let i = 0; i < myLeads.length; i++) {
//                 listItems += `
//                     <li>
//                         <a ' target="_blank" href="${myLeads[i]}'>
//                             ${myLeads[i]}
//                         </a>
//                     </li>
//                 `;}
//         // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
//         ulEl.innerHTML = listItems
//     //     or
//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.append(li)
//     }
// }
// ulEl.innerHTML = listItems

// function renderLeads() {
//     let listItems =""
//     for (let i = 0; i < myLeads.length; i++) {
//    listItems += 
//    `
//            <li>
//                <a target='_blank' href='${myLeads[i]}'>
//                    ${myLeads[i]}
//                </a>
//            </li>
//        ` 
//     }
//     ulEl.innerHTML = listItems;
//    }

//    renderLeads();

// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");


// chrome.storage.sync.get(['leads'], function(result) {
//   myLeads = result.leads || [];
//   renderLeads();
// });

// inputBtn.addEventListener('click', function() {
//   const lead = inputEl.value;
//   if (lead) {
//     myLeads.push(lead);
//     inputEl.value = "";
//     chrome.storage.sync.set({ leads: myLeads }, function() {
//       renderLeads();
//     });
//   }
// });

// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += `
//       <li>
//         <a target='_blank' href='${myLeads[i]}'>
//           ${myLeads[i]}
//         </a>
//       </li>
//     `;
//   }
//   ulEl.innerHTML = listItems;
// }

let myLeads = [];
let oldLeads= [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn")
const tabs = [{url: "https://www.merriam-webster.com/dictionary/agony"}]
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}
  
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}
deleteBtn.addEventListener("dblclick", function (){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

tabBtn.addEventListener("click", function() {
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
