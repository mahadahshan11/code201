'use strict'
let userName=prompt('What shall I call you')
alert('Good to have you' + userName);
console.log('the guest =',userName.toLowerCase());
console.log('the guest =',userName.toUpperCase());

alert('lets get to know me, please answer the questions with a simple yes or no')
let firstQuestion=prompt('IT is my main major in college')
if (firstQuestion === 'no'){
    alert('correct')
    }else{
     alert('nope,wrong answer')
    }
console.log('no')

let secondQuestion=prompt('l love to read')
if (secondQuestion === 'yes'){
    alert('correct')
    }else{
     alert('nope,wrong answer')
    }
    console.log('yes')

let thirdQuestion=prompt('i used to work as an english teacher')
if (thirdQuestion=== 'yes'){
    alert('correct')
    }else{
     alert('nope,wrong answer')
    }
    console.log('yes')

let forthQuestion=prompt('my goal is to travel the world')
if (forthQuestion === 'no'){
    alert('correct')
    }else{
     alert('nope,wrong answer')
    }
    console.log('no')


let fifthQuestion=prompt('my goal is to create cool apps')
if (fifthQuestion === 'yes'){
    alert('correct')
    }else{
     alert('nope,wrong answer')
    }
    console.log('yes')




alert('Thats it thank you' + userName);
//switch(firstQuestion){
   // case 'no':
     //   alert(firstQuestion):
      //break;
//default:
  //  alert('please check you answer')
  //   break;
//}
