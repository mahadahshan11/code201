'use strict';

let userName = prompt('What shall I call you');
alert('Good to have you ' + userName);
console.log('the guest =', userName.toLowerCase());
console.log('the guest =', userName.toUpperCase());

alert('lets get to know me, please answer the questions with a simple yes or no');
let score = 0;

function q1() {
  let firstQuestion = prompt('IT is my main major in college');
  while (firstQuestion !== 'yes' && firstQuestion !== 'y' && firstQuestion !== 'no' && firstQuestion !== 'n')
    firstQuestion = prompt ('Please enter y/n').toLowerCase();

  if (firstQuestion == 'no' || firstQuestion == 'n') {
    alert('correct');
    score++;
  } else {
    alert('nope,wrong answer');
  }
}
q1();

console.log('no')


function q2() {
  let secondQuestion = prompt('Do I love to read?');
  while (secondQuestion !== 'yes' && secondQuestion !== 'y' && secondQuestion !== 'no' && secondQuestion !== 'n')
    secondQuestion = prompt ('Please enter y/n').toLowerCase();
   
  if (secondQuestion == 'yes' || secondQuestion == 'y') {
    alert('correct:)');
    score++

  } else {
    alert('nope,wrong answer:/');
  }
}
q2();

console.log('yes')


function q3() {
  let thirdQuestion = prompt('i used to work as an english teacher');
  while (thirdQuestion !== 'yes' && thirdQuestion !== 'y' && thirdQuestion !== 'no' && thirdQuestion !== 'n')
    thirdQuestion = prompt ('Please enter y/n').toLowerCase();

  if (thirdQuestion == 'yes' || thirdQuestion == 'y') {
    alert('correct:)');
    score++

  } else {
    alert('nope,wrong answer:/');
  }
}
q3();

console.log('yes')


function q4() {
  let forthQuestion = prompt('my goal is to travel the world');
  while (forthQuestion !== 'yes' && forthQuestion !== 'y' && forthQuestion !== 'no' && forthQuestion !== 'n')
    forthQuestion = prompt ('Please enter y/n').toLowerCase();
    
  if (forthQuestion == 'no' || forthQuestion == 'n') {
    alert('correct:)');
    score++

  } else {
    alert('nope,wrong answer:/');
  }
}
q4();

console.log('no')


function q5() {
  let fifthQuestion = prompt('my goal is to create cool apps');
  while (fifthQuestion !== 'yes' && fifthQuestion !== 'y' && fifthQuestion !== 'no' && fifthQuestion !== 'n')
    fifthQuestion = prompt ('Please enter y/n').toLowerCase();
    
  if (fifthQuestion == 'yes' || fifthQuestion == 'y') {
    alert('correct:)');
    score++
  } else {
    alert('nope,wrong answer:/');
  }
}
q5();

console.log('yes')



function gussing() {
  for (let i = 4; i > 0; i--) {
    let gussNumber = prompt('Now try to guss the number  of times I failed my driver license test' + userName);
    if (gussNumber < 7) {
      alert('too low');
    } else if (gussNumber > 7) {
      alert('too high');
    } else {
      (gussNumber === 7);
      alert('wow, good job');
      score++
      break
    }
  }
}

gussing();

function gussingone (){
  let gussName = prompt ('can you guss my three favorite colors^^a hit^^ they make the rainbow').toLowerCase();
  let i;
  let colors = ['red' , 'yellow', 'blue'];
  
  for (let i = 0; i > 5; i++) {
    if (gussName ==  'red' || gussName == 'yellow' || gussName == 'blue'){
      alert('thats right^^'); 
      score++;
      i = i+5; 
    } else {
      gussName = prompt('try again')
    }
       
  }
    
  if (i == 5){
    if (gussName == 'red' || gussName == 'yellow' || gussName == 'blue'){
      alert ('thats right ^^')
      score++;
    } else{
      alert ('Am Afraid you ran out of attempts')
    }
   
  }

}
gussingone ();

alert('Your score = ' + score + '  out of 7');

alert('hope you enjoyed the game ' + userName);