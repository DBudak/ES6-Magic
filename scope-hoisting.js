/*
 Notes to self:
 1. Scope Moves outside, not inside (obvious one)
 2. Hoisting - during compilation function declarations! and variables, not VALUES! are moved to the top.
*/

//Scope Example
let colorglobal = "red";
function mixColors(){
	let colorGreen = "green";
  function mixMoreColors(){
  	let colorBlue = "blue";
    console.log(`Innermost function can acess all vars including global:
    							global color: ${colorglobal}
                  mixColors color: ${colorGreen}
                  mixMoreColors color: ${colorBlue}`);
  }
  
  mixMoreColors();
}
    console.log(`Global scope can see itself only:
    							global color: ${colorglobal}
                  mixColors color: undefined
                  mixMoreColors color: undefined`);
mixColors();

//Hoisting Examples
//1.
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
/*
For the compilator it looks like
function foo(){
    function bar() {
        return 3;
    }
    function bar() {
        return 8;
    }    
    return bar();
}
*/

//2.
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
alert(foo());
/*
For the compilator it looks like
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    //first Function Expression is executed
    bar = function() {
        return 3;
    };
    // Function created by first Function Expression is invoked
    return bar();
    // second Function Expression unreachable
}
*/