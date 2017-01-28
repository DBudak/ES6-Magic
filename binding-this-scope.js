//ES5 way with that=this
var cat = {
   name: "Gus",
   color: "gray",
   age: 15,
 
   printInfo: function() {
      var that = this;
      console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly
 
      nestedFunction = function() {
         console.log("Name:", that.name, "Color:", that.color, "Age:", that.age); //prints correctly
      }
   nestedFunction();
   }
}
cat.printInfo();
//or ES6 fat arrow function
var cat = {
   name: "Gus",
   color: "gray",
   age: 15,
 
   printInfo: function() {

      console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly
 
      nestedFunction = () => {
         console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly
      }
   nestedFunction();
   }
}
cat.printInfo();

/*
call(), bind(), apply()
apply invokes the function and assigns the scope (this) to the first argument. 
call is the same as apply but can take multiple args.
bind doesn't invoke the function
*/
var cat = {
   name: "Gus",
   color: "gray",
   age: 15,
 
   printInfo: function() {
      console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
      nestedFunction = function() {
         console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
      }
      nestedFunction.call(this);
      nestedFunction.apply(this);
 
      var storeFunction = nestedFunction.bind(this);
         storeFunction();
      }
}
cat.printInfo();





















