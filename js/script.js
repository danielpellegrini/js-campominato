/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati (tadaaa!)
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

/* FUNCTIONS */

function isPresent(par1, par2) { //function to check if the parameter1 is equal to parameter2
  var result = false;

  for (var j = 0; j < par2.length; j++) {
    if (par1 === par2[j]) {
      result = true;
    }
  }
  return result;
}

function randomNums(min, max) { //ranged random numbers function
  var result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
}


/* END FUNCTIONS */


/*
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/



// Il computer deve generare 16 numeri casuali tra 1 e 100.

var bombsList = []; //empty array for 'bomb numbers'


while (bombsList.length < 16) {
  var randomNum = randomNums(1, 100);

  if (!isPresent(bombsList, randomNum)) {
    bombsList.push(randomNum);
  }
}

bombsList.sort(function(a, b) {
  return a - b
});
console.log(bombsList);


// Chiedere all’utente (100 - 16) per 84 volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var maxValue = 100;
var userList = [];
blowedBomb = false;

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
while (userList.length < maxValue - 98 && blowedBomb === false) { //exit condition from while cycle if user hit a bomb or guesses every correct number

  do {

    var userNumber = parseInt(prompt('Insert a number from 1 to ' + maxValue));

    if (userNumber <= 0) {
      alert('You cannot insert a number lower than 1');
    } else if (userNumber > maxValue) {
      alert('You cannot insert a number higher than ' + maxValue);
    } else if (isNaN(userNumber)) {
      alert('Invalid input;\nTry again.');
    }

  } while (userNumber <= 0 || userNumber >= maxValue || isNaN(userNumber));


  // I numeri non possono essere duplicati (tadaaa!)
  var matchedNums = isPresent(userNumber, userList);

  if (!matchedNums) {
    userList.push(userNumber);
  } else if (matchedNums === true) {
    alert('This number has been already entered');
  }

  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

  for (var k = 0; k < bombsList.length; k++) {
    if (userNumber === bombsList[k]) {
      alert('ARGH!\nThe number ' + userNumber + ' was a BOMB!\nKABOOOM!\nYou lose');
      console.log('ARGH!\nThe number ' + userNumber + ' was a BOMB.\nKABOOOM!\nYou lose');
      blowedBomb = true;
    }
  }
}

userList.sort(function(a, b) {
  return a - b
});
console.log('User\'s numbers list:', userList);


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

if (userList.length === maxValue - 98) {
  alert('No more numbers left! You won!');
  console.log('You won!');
}

if (userList.length <= 5) {
  alert('Puah! You suck! Your Score is: ' + parseInt(userList.length) );
  console.log('Puah! You suck! Your Score is: ' + parseInt(userList.length) );
} else if (userList.length < 20) {
  alert('Hmm... could be better.\nYour score is: ' + parseInt(userList.length) + ' points');
  console.log('Hmm... could be better.\nYour score is: ', userList.length);
} else {
  alert('Well done! Your score is: ' + parseInt(userList.length) + ' points');
  console.log('Well done! Your score is:', userList.length);
}
