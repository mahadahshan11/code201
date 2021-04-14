'use strict';

let userName = prompt('What shall I call you');
alert('Good to have you ' + userName);
console.log('the guest =', userName.toLowerCase());
console.log('the guest =', userName.toUpperCase());

alert('lets get to know me, please answer the questions with a simple yes or no');
let score = 0;

function q1() {
    let firstQuestion = prompt('IT is my main major in college');
    if (firstQuestion === 'no') {
        alert('correct');
        score++
    } else {
        alert('nope,wrong answer');
    }
}
q1();

//console.log('no')


function q2() {
    let secondQuestion = prompt('l love to read');
    if (secondQuestion === 'yes') {
        alert('correct');
        score++

    } else {
        alert('nope,wrong answer');
    }
}
q2();

//console.log('yes')


function q3() {
    let thirdQuestion = prompt('i used to work as an english teacher');
    if (thirdQuestion === 'yes') {
        alert('correct');
        score++

    } else {
        alert('nope,wrong answer');
    }
}
q3();

//console.log('yes')


function q4() {

    let forthQuestion = prompt('my goal is to travel the world');
    if (forthQuestion === 'no') {
        alert('correct');
        score++

    } else {
        alert('nope,wrong answer');
    }
}
q4();

//console.log('no')


function q5() {
    let fifthQuestion = prompt('my goal is to create cool apps');
    if (fifthQuestion === 'yes') {
        alert('correct');
        score++
    } else {
        alert('nope,wrong answer');
    }
}
q5();

//console.log('yes')



function gussing() {
    for (let i = 4; i > 0; i--) {
        let gussNumber = prompt('Now try to guss a number ' + userName);
        if (gussNumber < 33) {
            alert('too low');
        } else if (gussNumber > 33) {
            alert('too high');
        } else {
            (gussNumber === 33);
            alert('good job');
            score++
            break
        }
    }
}

gussing();

alert('Your mark = ' + score + ' of 6');

alert('Thats it thank you ' + userName);