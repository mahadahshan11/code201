'use strict';

let userName=prompt('What shall I call you');
alert('Good to have you' + userName);
console.log('the guest =',userName.toLowerCase());
console.log('the guest =',userName.toUpperCase());

alert('lets get to know me, please answer the questions with a simple yes or no');
let firstQuestion=prompt('IT is my main major in college');
if (firstQuestion === 'no'){
  alert('correct');
}else{
  alert('nope,wrong answer');
}
//console.log('no')

let secondQuestion=prompt('l love to read');
if (secondQuestion === 'yes'){
  alert('correct');
}else{
  alert('nope,wrong answer');
}
//console.log('yes')

let thirdQuestion=prompt('i used to work as an english teacher');
if (thirdQuestion=== 'yes'){
  alert('correct');
}else{
  alert('nope,wrong answer');
}
//console.log('yes')

let forthQuestion=prompt('my goal is to travel the world');
if (forthQuestion === 'no'){
  alert('correct');
}else{
  alert('nope,wrong answer');
}
//console.log('no')


let fifthQuestion=prompt('my goal is to create cool apps');
if (fifthQuestion === 'yes'){
  alert('correct');
}else{
  alert('nope,wrong answer');
}
//console.log('yes')
let counter=0;
if(firstQuestion==='no'){counter +=1;}
if(secondQuestion==='yes'){counter +=1;}
if(thirdQuestion==='yes'){counter +=1;}
if(forthQuestion==='no'){counter +=1;}
if(fifthQuestion==='yes'){counter+=1;}
alert('make = ' +counter +'of 5');











for (let i=4; i>0; i--){
  let gussNumber=prompt('Now try to guss a number'+ userName);
  if(gussNumber<33 ){
    alert('too low');
  }else if (gussNumber >33){
    alert ('too high');
  }else{(gussNumber===33);
    alert ('good job');
  }
}
alert('Thats it thank you' + userName);
