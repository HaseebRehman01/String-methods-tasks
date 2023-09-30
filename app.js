// task 1
// var a = prompt("write first name")
// var b = prompt(" write last name")
// var merge = a+b
// alert(merge)
// task 2
// var a = prompt("Write your mob phone model")
// var length = a.length
// console.log(a)
// console.log("Length of string :  "+length)
// task 3
// var str = "pakistani"
// var n = str.indexOf("n");
// console.log("string "+ str)
// console.log("Index of n is : "+n)
// task 4
// var a = "hello world"
// var b = a.lastIndexOf("l")
// console.log("Sring "+a)
// console.log("Last index of l is : "+b)
// task 5
// var a ="Pakistani"
// var b = a.charAt(3)
// console.log("String " + a)
// console.log("Character at index 3 is :   " + b)

// task 6 
// var text = "hyderabad";

// for (var i = 0; i < text.length; i++) {
//     var b = text.slice(i, i + 5);
//     if (b === "hyder") {
//         text = text.slice(0, i) + "Islam" + text.slice(i + 5);
//     }
// }

// console.log(text);

// var text = "Ali and Sami are best friends. They play cricket and football together.";

// for (var i = 0; i < text.length; i++) {
//     var b = text.slice(i, i + 3);
//     if (b === "and") {
//         text = text.slice(0, i) + "&" + text.slice(i + 3);
//     }
// }

// console.log(text);
// task 9 
// var stringNumber = "472";
// var convertedNumber = +stringNumber;

// // Display the values and types in your browser
// document.write("String value: " + stringNumber + "<br>");
// document.write("Type of the string: " + typeof stringNumber + "<br>");
// document.write("Converted number: " + convertedNumber + "<br>");
// document.write("Type of the converted number: " + typeof convertedNumber +"<br>" )

// or
// var stringNumber = "472";
// var convertedNumber = parseInt(stringNumber);

// // Display the values and types in your browser
// document.write("String value: " + stringNumber + "<br>");
// document.write("Type of the string: " + typeof stringNumber + "<br>");
// document.write("Converted number: " + convertedNumber + "<br>");
// document.write("Type of the converted number: " + typeof convertedNumber +"<br>" )

// task 10 
// var b= prompt("Enter your email in this format www.google.com " )
// var c = b.slice(4)
// document.write("URL : "+b+"<br>")
// document.write("DOMAIN : "+c)

// task 11
// var b = prompt("write your name ")
// var s = b[0].toUpperCase()+b.slice(1)
// console.log(s)

// task 14
// var num = 379.90
// var change = num.toString();
// var replace = change.replace(".","")
// console.log("Number "+ num)
// console.log("Sting "+ replace)
// task 15
// var a = "3"
// var b = "3"
// var x = a + b
// console.log(x)
// task 16

// var a = "3"
// var b = "3"
// var x = a - b
// console.log(x)

// task 17
// Get user input for the username
// var username = prompt("ENter your name")
// var flag = false
// for (var i = 0; i<username.length;i++){
//     var charcode = username.charCodeAt(i)
//     if (charcode === 33 ||charcode === 44 ||charcode === 46 ||charcode === 64 )
//     {
//         flag = true
//         break; 
//     }

// }

// // Provide feedback to the user
// if (flag) {
//     alert("Please enter a valid username without special symbols (@, ., , or !).");
// } else {
//     alert("Username is valid: " + username);
// }

// task 18 
// var input = prompt("Enter what sweet do you want ?").toLowerCase()
// var arr     = ["Apple pie", "cookie","orange cake ","pineapple cake"]
// var flag = false
// for (var i = 0;i<arr.length;i++){
//     if (input === arr[i].toLowerCase()){
   
//         flag=true

//         break;
//     }
// } 
// if(flag===false){
//     alert("No this is not available ")

// }
// else{
//     alert("yes "+ input + " is available at "+i+" index")
// }
// task 19
// Get user input for the two strings
// var string1 = prompt("Enter the first string:");
// var string2 = prompt("Enter the second string:");

// // Compare the two strings
// if (string1 === string2) {
//   alert("Both strings are equal.");
// } else if (string1 > string2) {
//     // if 1 string have a and 2 have b 2nd is greater
//   alert("The first string is greater than the second string.");
// } else {
//   alert("The second string is greater than the first string.");
// }   
    // task 20
//     var input = prompt("Enter your password");
// var correct = false; // Start by assuming the password is not correct

// var firstChar = input.charAt(0);

// if (!isNaN(firstChar)) {
//   correct = false; // The first character is a number, so it's not correct
// } else if (input.length < 6 || input.length > 20) {
//   correct = false; // The password length is outside the range of 6 to 20 characters
// } else {
//   var number = false;
//   var alpha = false;
//   var str = false;

//   for (var i = 0; i < input.length; i++) {
//     var check = input[i].charCodeAt();
//     if ((check >= 65 && check <= 90) || (check >= 97 && check <= 122)) {
//       alpha = true;
//     }

//     if ((check >= 48 && check <= 57)) {
//       number = true;
//     }

//     if (input[i] === " ") {
//       str = true;
//       break;
//     }
//   }

//   if (alpha && number && !str) {
//     correct = true;
//   }
// }

// if (correct === false) {
//   alert("Password is not valid. Type at least 6 characters and atmost 20 characters, don't start with a number, and don't use spaces.");
// } else {
//   alert("Password is valid");
// }



// task 22
// var a = "pakistan"
// var b= a.slice(7)
// console.log(b)


// task 23
// var sample = "The quick brown fox jumps over the lazy dog"
// sample = sample.toLowerCase()
// sample = sample.split(" ")
// var the = "the"
// count = 0
// for (var i = 0 ;i<sample.length;i++){
// if (sample[i] === "the" ){
//   count++
// }
// }
// console.log(count)

// task 24
var str = "Pakistan";
str = str.toLowerCase()
var arr = ["a","e","i","o","u"]

var vov = 0
var consunants = 0
for (var i = 0 ; i<arr.length;i++){
  for (var j = 0 ; j<str.length;j++){
if (arr[i]  === str[j]){
vov = vov + 1 
}

}

}
for (var a = 0 ; a<str.length;a++){
  if (str[a] >= "a" && str[a] <="z" ){
  consunants= consunants + 1 
  }
}
console.log(vov)
console.log(consunants)