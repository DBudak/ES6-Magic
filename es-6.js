//Closures - functions that have access to outside scope, even after its done or called from another file
console.log('Closures');
let closures = () => {
  let num = 1;
  let increaseNum = () => num++;
  console.log('Initial value - ',num);
  increaseNum();
  console.log('After function call value - ',num);
};
closures();

//Currying - function that takes 1 argument only and returns a function. Normal functions can be curryied using methods
console.log('Currying');
let currying = 
  name => 
  	size => 
    	color => 
      	`I am a dragon named ${name}, a ${size} one, wearing ${color} scale`;

console.log(currying('Morty')('Small')('Pink'));
//or
let martha = currying('Martha'); //At this point var martha has a function
console.log(martha('Large')('Orange'));

//Recursion - a function that calls itself until it doesn't
console.log('Recursion');
let countDown = (num) => {
	if(num===0) return;
  console.log(num);
  countDown(num-1);
}
countDown(5);

//ALWAYS USE LET INSTEAD OF VAR. IT HAS LOCAL SCOPE
//USE JSON.stringify(object,null,2); to get a readable console.log output

//Promise - a callback replacement. Runs code async, handles errors
console.log('Promise called');
let p = new Promise((resolve,reject) =>{

	setTimeout(()=>{
  	console.log('Promise executed');
  	if(true){   
  		resolve('no errors');
    }else{
      reject('error occured');
    }
  },10000);
	
});
p.then((data) => console.log(data))
	.catch((error) => console.log(error));

//Array spread - divides array in separate values
console.log('Array Spread');

let arraySpread = ()=>{
	let first = [1,2,3];
  let second = [4,5,6];
  let third = [7,8,9];
  
  first.push(second);
  console.log('Without Array Spread:',first);
  second.push(...third);
  console.log('With Array Spread',second);
}
arraySpread();

//Template String - finally someone took care of horrible + var + poopcode
let templateString = () =>{
	let wonderfulPerson = {
  	name:'The guy who came up with this idea',
    reason: 'he\'s awesome'
  };
  let t = `So ${wonderfulPerson.name} is ${wonderfulPerson.reason}`;
  console.log(t);
  
  //tagging magic
  let destination = 'home';
  let time = 'tomorrow';
  let tag = (strings, ...values) => {
  	console.log(strings);
    console.log(values);
    let isSunday = true;
    if(isSunday){
    	values[0] = 'Work';
    }else{
    	values[1]='Today';
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
  }
  let message = tag`I\'m going ${destination} ${time}`;
  console.log('Message', message);
}
templateString();

/*
Modules, this one in comments, imagine its 2 js files

1 File:
main.js

import * as module from 'module.js';

or

import {
	sumTwo as addTwo,
  sumThree
} from 'module.js';

if the first import is used all exported methods can be used using module.sumTwo fro example

if the second import is used addTwo(a,b) and sumThree(a,b,c) will work

2 File:
module.js

export{sumTwo, sumThree};
or
export sumTwo(a,b){}
export sumThree(a,b,c)

You got th idea.
*/

//Array.from() converts array-like objects into proper array so I can apply .filter methods

//Generator - a multi-step function 
console.log('Generator');
let generator = () =>{
	function* genFunc(){
  	console.log('first');
    yield 'First Step';
    console.log('second');
  }
  	let genVar = genFunc();
  console.log('Simple call to a generator returns' , genVar);
  console.log('.next() call to a generator returns', genVar.next());
  console.log('another .next() call to a generator returns', genVar.next());
};
generator();
