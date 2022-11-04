const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  
  /* isVowel takes a character and returns true if its a vowel */
  function isVowel(char){
    return ["a", "i", "e", "o", "u"].filter(x => x===char).length > 0 ? true:false;
  }
  function sum(list){
    return list.reduce((s,r) => (s+r));
  }
  function multiply(list){
    return list.reduce((m,r) => (m*r));
  }
  function reverse(str){
    let res = ""
    for(let s=str.length-1; s>=0; s--){ 
      res+=str[s];
    }
    return res;
  }
  
  function filterLongWords(arr, i){
    return arr.filter(r => r.length > i);
  }
  
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel("a")));
  console.log("Expected output of isVowel('c') is false  " + myFunctionTest(false, isVowel("c")));
  
  console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
  console.log("Expected output of sum([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of reverse('jag testar') is ratset gaj " + myFunctionTest("ratset gaj", reverse("jag testar")));
  
  console.log("Expected output of filterLongWords(['john', 'doe', 'alice','tom'], 3) is ['john', 'alice'] " + myFunctionTest(2, filterLongWords(['john', 'doe', 'alice','tom'], 3).length));
  