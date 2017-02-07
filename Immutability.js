/*
 * ARRAYS
 *
*/

let state = [1,2,3,4,5,6,7,8,9,10];

//Adding an element
let newState = [...state, 11];
let newState = state.concat([11]);

//Removing an element at index
 let newState = state.slice(0,index)
  .concat(state.slice(index+1));
 let newState = [
			...state.slice(0, index), 
			...state.slice(index+1)
  ];                            

//Modifying an element at index
let newState = state.slice(0,index)
	.concat(state[index] + 100)
  .concat(state.slice(index + 1) );
let newState = [
	...state.slice(0,index),
  state[index] + 100,
  ...state.slice(index + 1)
];

/*
 * OBJECTS
 *
*/
let state = {
	name: 'Jenny',
  age: 25,
  sex: 'Female'
}
//Object.assign(object to be mutated, any other object to be assigned,any other object to be assigned). Latest wins.
let newState = Object.assign({},state,{
	age: state.age+1
});

let newState = {
	...state,
  age: state.age + 1
};