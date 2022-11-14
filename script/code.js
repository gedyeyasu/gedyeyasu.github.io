// Exercise 1
String.prototype.filter = function (element) {
  if (this.indexOf(element) > -1) {
    return this.replace(element, "").trim();
  }
  return this;
};
console.log("This house is not nice!".filter("not"));

// Exercise 2
Array.prototype.bubbleSort = function () {
  var i, j;
  var len = this.length;

  var isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (this[j] > this[j + 1]) {
        var temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
        isSwapped = true;
      }
    }

    // IF no two elements were swapped by inner loop, then break

    if (!isSwapped) {
      break;
    }
  }
  return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Exercise 3
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

var Student = function () {};
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
  return this.name + " just learned " + subject;
};

var Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return this.name + " is now teaching " + subject;
};

var me = new Student();
var te = new Teacher();
me.initialize("John", 25);
te.initialize("Alice", 32);
me.learn("Inheritance");
te.teach("Inheritance");
