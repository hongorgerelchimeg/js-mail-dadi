// Array of emails
const emailList = ['booleaner1@gmail.com', 'booleaner2@gmail.com', 'booleaner3@gmail.com', 'booleaner4@gmail.com', 'booleaner5@gmail.com', 'booleaner6@gmail.com'];

console.log(emailList);

//DOM elements 

let inputMail = document.querySelector('#userMail');
let btnSend = document.querySelector('#send')

// Login function

btnSend.addEventListener('click', function() {

//Logics start

let userEmail = inputMail.value;
console.log(userEmail);

// Cycle for searching email from list

let found = false;

for (let i = 0; i < emailList.length; i++) {
    if (emailList[i] == userEmail) {
        found = true;
    }
}

console.log('found', found)

// output answer 
const output = document.querySelector('.output');


if (found == false) {
    console.log('non esiste');
    output.innerHTML = 'non esiste'
    
}  else {
    console.log('esiste');
    output.innerHTML = `Ciao ${userEmail}, benvenuto!`
}

})

// // Creamo random mail
// // Questa funziona crea random domain mail
// // domain valore = gmail, boolean, yahoo
// function randomMail(limit) {

//     let genEmail = '';
//     let domainName = '@gmail.com';
//     let domainName2 = '@boolean.com';
//     let domainName3 = '@yahoo.com';
//     let result = document.querySelector('#test');
  
//     for (let i = 1; i <= limit; i++) {
//       let address = Math.random().toString(36).substr(2, 8);
//       let counter = Math.round(getRandomInt(0, 2));
//       if (counter === 0) {
//           genEmail = address + domainName;
//       } else if (counter === 1) {
//           genEmail = address + domainName2;
//       } else if (counter === 2) {
//           genEmail = address + domainName3;
//       }
     
      
//     }
//   }
  
// // Qui difinesce quanti mail vogliamo

//   randomMail(100)
  
//   function getRandomInt(min, max) {
//     return Math.random() * (max - min) + min;
//   }


