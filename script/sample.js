// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//   console.log(x);
//   console.log(a);
//   var f = function (a, b, c) {
//     b = a;
//     console.log(b);
//     b = c;
//     var x = 5;
//   };
//   f(a, b, c);
//   console.log(b);
//   var x = 10;
// };
// c(8, 9, 10);
// console.log(b);
// console.log(x);

// var x = 9;
// function myFunction() {
//   return x * x;
// }
// console.log(myFunction(undefined));
// x = 5;NaN
// console.log(myFunction());
// 1) Output:  undefined 8 8 9 10 1

// Initially x is undefined since we have a var declaration that will get hoisted at the local scope. then a will be logged as 8 since it's just a local variable different from the one in the global scope passed to the function so it will be 8  then again we pass b as a local variable to the inner function and assigned a value to the local variable b which will be logged in again as 8. Then we will log b  as 9 from the outer function scope. finally, print b and x  as 10  and 1 from the global scope.

// 2) Local Scope: variables declared within a function become local to the function.
//     Global Scope: variable declared outside a function becomes global and has global scope

// 3) a. No, Variables defined in the inner scope can't be accessed by the outer scope
//      b. Yes, the Variable in the parent scope can be accessed by the variable in the child scope
//      c. No, Variables defined in the inner scope can't be accessed by the outer scope
//      d.Yes, the child scope can access variables in the grandparent scope
//      e. Yes, the child scope can access variables in the parent scope

// 4) Output: 81 25
//  since x will be updated from 9 to 5

// 5) Output: alert: 10
//  since foo is undefined  inside the function scope it is a falsey value thus the value of foo will be updated

// var make_adder = function (b) {
//   var counter = 0;
//   return function () {
//     return (counter += b);
//   };
// };

// var add5 = make_adder(5);
// var add7 = make_adder(7);
// console.log(add5());
// console.log(add5());

// const Employee = (function () {
//   let name = "gedeon";

//   let age = 60;

//   let salary = 5679;

//   const getName = function () {
//     return name;
//   };

//   const getAge = function () {
//     return age;
//   };

//   const getSalary = function () {
//     return salary;
//   };

//   const setName = function (name) {
//     this.name = name;
//   };

//   const setAge = function (age) {
//     this.age = age;
//   };

//   const setSalary = function (salary) {
//     this.salary = salary;
//   };

//   const increaseSalary = function (percentage) {
//     employee.getSalary *= percentage;
//   };

//   const incrementAge = function () {
//     employee.getAge + 1;
//   };

//   return {
//     Name: setName,

//     Age: setAge,

//     Salary: setSalary,

//     increaseSalary: increaseSalary,

//     incrementAge: incrementAge,
//   };
// })();
// var x = 5;
// var y = 7;
// function a() {
//   function b() {
//     console.log(`1: x=${x} y=${y}`);
//     Y = 10;
//     return function c(y) {
//       console.log(`2: x=${x} y=${y}`);
//     };
//   }
//   console.log(`3: x=${x} y=${y}`);
//   var z = b();
//   var x = 10;
//   z(20);
// }
// console.log(`4: x=${x} y=${y}`);
// a();
// console.log(`5: x=${x} y=${y}`);
// setInterval(() => console.log("10 minutes have passed"), 1000);
// console.log(shortest("ze", "bye", "zyr"));

function longestNoSpace(...str) {
  if (str !== null) {
    let filterdStr = str.filter((s) => !s.includes(" "));
    if (filterdStr.length == 0) {
      return 0;
    } else if (filterdStr.length == 1) {
      return filterdStr.reduce((s) => s);
    } else {
      return filterdStr.map((s) => s.length).reduce((a, b) => a > b);
    }
  }
  return 0;
}
console.log(longestNoSpace());
