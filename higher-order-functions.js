//Higher order functions - functions that receive another function as a parameter

let numbers = [1,2,3,4,5];

// MAP - Creates an array as a result of calling provided function on each element in given array
numbersMapped = numbers.map( x => x+1 );
console.log('Map',numbersMapped);

//FILTER - creates an array of elements that pass the test in provided function
numbersFiltered = numbers.filter(x => x < 3 );
console.log('Filter',numbersFiltered);

//FIND - works as filter, but returns only the first value
numbersFindFive = numbers.find(x => x==5);
console.log('Find',numbersFindFive);

/*
FOR MORE BUILT IN FUNCTIONS CHECK 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

//Reduce - universal tool .reduce((endgoal,iterator){return endgoal},endgoal initial state);
towToFourNumbers = numbers.reduce((numbers, number) => 
	{	
  	if(number >= 2 && number <=4) numbers.push(number);    
  	return numbers;
  }
,[]);
console.log('Reduce',towToFourNumbers);

let findNumbersBetweenOneAndThree = (numbers,number) =>{
  	if(number >= 1 && number <=3) numbers.push(number);    
  	return numbers;	
};

OnetoThree = numbers.reduce(findNumbersBetweenOneAndThree,[]);
console.log('Reduce with predefined function', OnetoThree);
