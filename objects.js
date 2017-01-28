/*
 Notes to self:
 1. Don't use fat arrow functions in prototype methods, they change this.
 2. With Constructor, methods are created for each instance. Prototype shares 1 	   method between all instances.
 3. Instance can't edit prototype props. If the instance has the prop with the same name declared it masks the prototype prop with a new value. But doesn't change it.
 4. Object copying creates a POINTER to the same object. Changing copy WILL change initial object.
 5. Objects pass as arguments create a pointer. Re-declaring object with the same name as the passed argument will change the local function pointer to a new object.
*/

//Creating objects
let emptyDragon = new Object();
let emptyHobbit = {};

//Creating objects with properties
let glaurung = new Object();
glaurung.name = "Glaurung";
glaurung.age = "Ancient";

let frodo = {
	name: "Frodo",
	age: 33 
};

//Creating objects with a constructor
function dragonConstructor(name, age){
	this.species = "Dragon";
	this.size = "Enormous";
	this.isDead = false;
	this.name = name;
	this.age = age;

	this.getDefeated = () => this.isDead = true;
}
let smaug = new dragonConstructor('Smaug','Unknown');
let scatha = new dragonConstructor('Scatha','Unknown');

scatha.getDefeated();
console.log('Is Scatha dead when The Hobbit happes? ', scatha.isDead);

//Creating objects with a prototype
function hobbitPrototype(){};

hobbitPrototype.prototype.species="Hobbit";
hobbitPrototype.prototype.size="Short";
hobbitPrototype.prototype.dragonSlayer = false;
hobbitPrototype.prototype.defeatDragon = function(){this.dragonSlayer = true;}

let bilbo = new hobbitPrototype();
bilbo.name = "Bilbo";
bilbo.age = 50;
bilbo.defeatDragon();
console.log("Has Bilbo defeated a dragon?",bilbo.dragonSlayer);

//Checking the object type (constructor used)
console.log('Is bilbo instance of hobbitPrototype?', bilbo instanceof hobbitPrototype);
console.log('Is scatha instance of dragonConstructor?', bilbo instanceof hobbitPrototype);










