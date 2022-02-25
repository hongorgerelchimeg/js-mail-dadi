// Constant DOMS
const btnStart = document.querySelector('#start');
const userNumber = document.querySelector('.user-number');
const computerNumber = document.querySelector('.computer-number'); 

btnStart.addEventListener('click', function() {

    let diceNumberUser = Math.round(getRandomInt(1, 10000000));
    userNumber.innerHTML = diceNumberUser;
    let diceNumberComputer = Math.round(getRandomInt(1, 10000000));
    computerNumber.innerHTML = diceNumberComputer;
    console.log(diceNumberUser);
    console.log(diceNumberComputer);

    //Stampa Vincitore
    const output = document.querySelector('#output');
    const versus = document.querySelector('.vs');
   

    if (diceNumberComputer > diceNumberUser) {
        output.classList.remove("display-none", "rotate");
        output.classList.add("display");
        versus.classList.add("display-none");
    } else if (diceNumberComputer < diceNumberUser) {
        output.classList.remove("display-none");
        output.classList.add("display", "rotate");
        versus.classList.add("display-none");
    } else {
        output.classList.remove("display");
        output.classList.add("display-none");
        versus.innerHTML = 'TIE';
        versus.classList.remove("display-none");
    }
     
    function getRandomInt(min, max) {
      return Math.random() * (max - min) + min;
    }


})
  