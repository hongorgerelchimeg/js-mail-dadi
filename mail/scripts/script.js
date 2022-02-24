// Creamo random mail
// Questa funziona crea random domain mail
// domain valore = gmail, boolean, yahoo
function randomMail(limit) {

    let genEmail = '';
    let domainName = '@gmail.com';
    let domainName2 = '@boolean.com';
    let domainName3 = '@yahoo.com';
    let result ;
  
    for (let i = 1; i <= limit; i++) {
      let address = Math.random().toString(36).substr(2, 8);
      let counter = Math.round(getRandomInt(0, 2));
      if (counter === 0) {
          genEmail = address + domainName;
      } else if (counter === 1) {
          genEmail = address + domainName2;
      } else if (counter === 2) {
          genEmail = address + domainName3;
      }
     
      console.log(genEmail);
      
    }
  }
  
// Qui difinesce quanti mail vogliamo

  randomMail(100)
  
  function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }


 ;