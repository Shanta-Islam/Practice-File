//////////// Milestone 4: module 16:
// module 16-8 no =>
var firstName = "shanta";
var lastName = "Islam";
var fullName = firstName + ' ' + lastName;
console.log(fullName);

var price1 = "31";
var price2 = 10;
var totalPrice = price1 + price2;
console.log(totalPrice);

//convert string to number
console.log(price1);
var price1Number = parseInt(price1);
console.log(price1Number);

var gpa = "3.6";
var gpaNumber = parseInt(gpa);
console.log(gpaNumber)
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber)

// module 16-9 no =>
var price = 100;
console.log(typeof price);
var price = "100";
console.log(typeof price);
var isHappy = true;
console.log(typeof isHappy);

// module 17-2 no => declare array, array length
var friendsAge = [11, 21, 45, 17, 30];
var picnicFee = [5000, 2000, 1000];
var nayikas = ["opu", "sabnur"];
var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(friendsAge);
console.log(friendsAge.length);

// module 17-3 no => array index, get and set by index, indexof
var numbers = [45, 68, 78, 56, 89];
// 1. get element value by index
console.log(numbers[3]);

// 2. set element value by index
var element =numbers[1];
console.log(element);
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);


// 3. find index of an element
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
var positionIndex = numbers.indexOf(899);
console.log(positionIndex);

// module 17-4 no => Add or remove element from an array
var numbers = [45, 68, 78, 56, 89];
// use push to add element to an array as the last element
numbers.push(65);
console.log(numbers);
var friends = ["kalam", "salam", "rahim"];
friends.push("balam"); // add elem in the last position of an array
console.log(friends);
friends.unshift("galam"); // add elem in the first position of an array
console.log(friends);
// use pop to get last element
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
var elem = numbers.pop();
console.log(elem);
console.log(numbers);
// module 17-5 no => compare variables and comparison operator
console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(6 == 6);
console.log(5 != 6);

console.log(5 <= 6);
console.log(6 >= 6);

var num1 = 56;
var num2 = 89;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// multiple conditions
var money1 = 500;
var money2 = 600;
var result1 = 30;
var result2= 40;
var height1 = 5;
var height2 = 6;
console.log((money1 > money2) && (result1 > result2) && (height1 > height2));
console.log((money1 > money2) || (result1 > result2) || (height1 > height2));

// module 17-6 no => make conditional decision , if-else, comparison
var iphonePrice = 79000;
var myBudget1 = 9500;
var myBudget2 = 95000;
// if(iphonePrice < myBudget1){
//     console.log("I will buy the iphone");
// }
if(iphonePrice < myBudget2){
    console.log("I will buy the iphone");
}

var chickenPrice = 500;
var myMoney = 50;
if(chickenPrice <= myMoney){
    console.log("I will buy the chicken"); 
}
else{
    console.log("I will eat potato");
}

// module 17-7 no => handle multiple conditions, and or
var isGraduated = true;
var salary = 15000;
var cars = 1;

if((isGraduated === true) && (salary > 25000)){
    console.log("job");
}
else{
    console.log("try another");
}

if((isGraduated === true) && (salary > 25000) && (cars >= 5)){
    console.log("job");
}
else{
    console.log("try another");
}

if((isGraduated === true) || (salary > 25000) || (cars >= 5)){
    console.log("job");
}
else{
    console.log("try another");
}

if((isGraduated === true) && (salary > 25000 || cars >= 1)){
    console.log("job");
}
else{
    console.log("try another");
}

// module 17-8 no => multi stage condition and nested conditions

// multi stage condition
var money = 10;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;
if(danishPrice < money){
    console.log("danish");
}
else if(butterBread < money){
    console.log("butterBread");
}
else if(toastBiscuit < money){
    console.log("toastBiscuit");
}
else{
    console.log("just cha");
}

// nested conditions
var math = true;
var geometry = true;
var straightLine = false;

if(math == true){
    if(geometry == true){
        if(straightLine == true){

        }
        else{
            console.log("baka pothe choba na");
        }
    }
    else{
        console.log("pari na");
    }
}

// module 17-9 no => module summary and two more condiions
/** practice problem 1: you are given an array
 * var fruits = ["Apple", "Banana", "Orange"];
 * a) Find the index of "Banana" and replace "Banana" with "Mango"
 * b) Remove "Orange" and add "Watermelon"
 *  **/ 

/** practice problem 2: you and your friends tom, jane , peter and john got their final results. your total score is 85, tom's total score is 66, jane's total score is
 * 95.peter total score is 56 and john's total score is 40.The grading chart is
 * 80 or above A grade
 * 70 or above B grade
 * ...
 * 39 or less => F grade
 * 
 * write a program to find your and your friends grades using if-else
 *  **/ 

/** practice problem 3: you are given three numbers 13, 79, 45. write a program that will print the largest number using if-else. 
 *  **/ 

/** practice problem 4: you aregiven a triangle with the sides 9, 8, 9. write a program to check whether a triangle is Isosceles or not using if-else
 * 
 * Isosceles => two sids are equal
 *  **/

// module 18-2 no => while loop, debug

var roastGiven =0;
while(roastGiven < 7){
    console.log("Roast den");
    // roastGiven = roastGiven + 1;
    // roastGiven += 1;
    console.log(roastGiven);
    roastGiven++;
}

// module 18-3 no => loop example numbers, odd numbers, even numbers
// print 1 to 10 number
var num = 1;
while(num <= 10){
    console.log(num);
    num++;
}
// print 1 to 10 all even number
var num = 0;
while(num <= 10){
    console.log(num);
    // num++;
    num = num +2;
}
// print 1 to 10 all odd number
var num = 1;
while(num <= 10){
    console.log(num);
    // num++;
    num = num + 2;
}

// module 18-4 no => for loop, while vs for loop
var roastGiven =0;
while(roastGiven < 7){
    console.log("Roast den");
    // roastGiven = roastGiven + 1;
    // roastGiven += 1;
    console.log(roastGiven);
    roastGiven++;
}

// for lop
for(var roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log("Roast den");
}
// another way to write for loop
for(var i = 0; i < 7; i++){
    console.log("Roast den");
}
// print even num using for loop
for(var i = 0; i <= 20; i+=2){
    console.log(i);
}
// print odd num using for loop
for(var i = 1; i <= 20; i+=2){
    console.log(i);
}
// module 18-5 no => run a loop for each elem of an array
var numbers = [45, 87, 89, 56, 32, 52, 25];
for(var i = 0; i < 7; i++){ // i < 7 means this is set to be fixed.but it is not a good practice becz we don't know how much elem will be present an array.
    var singleNum = numbers[i];
    console.log(singleNum);
}

// [array-name].length
// get each elem of a number array
var numbers = [45, 87, 89, 56, 32, 52, 25];
for(var i = 0; i < numbers.length; i++){
    var singleNum = numbers[i];
    console.log(singleNum);
}

// get each elem of a string array
var items =["bottle", "mouse", "sunglass", "pen", "notebook"];
for(var i = 0; i < items.length; i++){
    var singleItem = items[i];
    console.log(singleItem);
}

// module 18-6 no => break and continue
// break
for(var i = 1; i <= 20; i++){
    console.log(i);
    if(i > 10){
        break;
    }
}

//continue
var numbers = [45, 87, 89, 56, 32, 52, 25, 1009, 46, 85];
for(var i = 0; i < numbers.length; i++){
    var singleNum = numbers[i];
    if(singleItem > 100){
        continue;
    }
    console.log(singleNum);
}

// module 18-7 no => understand for and while loop in a reverse way

//reverse way while loop
var num = 10;
while(num >= 1){
    console.log(num);
    num--;
}
//reverse way for loop
for(var i = 10; i >=1; i--){
    console.log(i);
}

// module 18-8 no => substraction, average, remainder

// substraction
var applePrice = 400;
var orangePrice = 300;
var totalPrice = applePrice -orangePrice;
console.log(totalPrice);

// average
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
var average = totalMarks / 5;
console.log(average);
var averageToDecimal = average.toFixed(2);
console.log(averageToDecimal);

// remainder
var number = 119;
var remainder = number % 5;
console.log(remainder);


// module 18_5-1 no => practice js
//1. let's say you have x amount of money , if you have more than 80000, then you will buy a mac. if you have more than 60000 then you will buy gaming laptop, if you have more than 40000 then you will buy lenovo yoga, if you have more than 20000 then you will buy a used laptop otherwise you will use your moble phone.

// module 18_5-2 no => practice loop
// 1. display "Today" for 39 times
// 2. display numbers 58 to 98
// 3. show all even numbers from 412 to 456
// 4. show all odd numbers 581 to 623
// 5. declare an array for all the topics that you have learned last few days display as output
// 6. create an array for all the mobile phones. display all the elements of the array by using a while loop
// 7. run a loop from 30 to 86. this loop will stop if the values get higher than 44
// 8. write the price of the books that you have. display the prices if the prices is lower than 200


// module 19-2 no => declare function, call function , function vs loop

// function declaration
function startFun(){
    console.log("stand up")
}
// function can call many times
 startFun(); // call the function
 startFun(); // call the function
 startFun(); // call the function

// module 19-3 no => add function parameter, handle multiple parameters

// add function parameter
function bringSingara(money){
    console.log("money disen", money);
    console.log("singara");
    console.log(money);
}
// bringSingara(250);

var taka = 500;
bringSingara(taka);

// multiple parameter
function add(num1, num2){
    total= num1 + num2;
    console.log("going to add", num1, num2);
    console.log(total);
}
add(5, 2);

// module 19-4 no => return from e function
function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    // return; // retrun undefined
    return sum;
}

var total = add(80, 20);
console.log(total);

// module 19-5 no => function examples and function summary
function getAverage(assignmen1, assignmen2, assignmen3){
    const total = assignmen1 + assignmen2 + assignmen3;
    const average = total / 3;
    return average;
}

const assignmenmarks1 = 40;
const assignmenmarks2 = 50;
const assignmenmarks3 = 60;
var myAverage = getAverage(assignmenmarks1, assignmenmarks2, assignmenmarks3);
console.log(myAverage);

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(10, 20);
const result2 = add(30, 40);
const finalResult = add(result1, result2);

// function parameter and function return : 1. no return & no parameter . 2. has return & no parameter 3. no return & has parameter 4. has return & has parameter

// module 19-6 no => declare multiple objects with multiple properties
var student = {
    id : 115, 
    name : "Sonam",
    class : 9, 
    marks : 98
}
console.log(student);
console.log(student.name);
student.marks = 100;
console.log(student);

// module 19-7 no => multiple way to get and set object property

// get obejct property
var shoppingCart ={
    books : 3, 
    sunglass : 2, 
    mouse : 1,
    pen: 10
}
// when you know the property name, use dot notation
var penCount = shoppingCart.pen;
// alternative system
var penCount1 = shoppingCart["pen"];
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);


var propertyName = "mouse";
var proper = shoppingCart[propertyName];
console.log(shoppingCart);
console.log(penCount);
console.log(penCount1);
console.log(properties);
console.log(propertyValues);
console.log(proper);

// set obejct property
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart["mouse"] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);


// module 19-8 no => looping through an object

var shoppingCart ={
    books : 3, 
    sunglass : 2, 
    mouse : 1,
    pen: 10
}

var friendsAge = {
    rahim : 22, 
    karim: 30, 
    jamal : 27,
    robi : 32
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for(var i = 0; keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}

// module 19-9 no => practice problem
// switch loop
const color = "white";
switch(color){
    case "green":
        console.log("green");
        break;
    case "blue":
        console.log("blue");
        break;
    case "white":
        console.log("white");
        break;
    case "red":
        console.log("red");
    default:
        console.log("no color");
}

// practice 1. write a function called foo() which prints "foo" and a function called bar() which prints "bar".call function bar() in the foo() function afetr printing.what will be the output?now call the foo() to see the output.  2. write a function called make_avg() which will take an three integers abd return the average of those values.  3. write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.  4. write a function called odd_even() which takes an integer value and tells whether this value is even or odd.you need to do it in 4 ways: has return + has para, no return + has para  5. you are in a hurray to go to your schoo on time,But when you are crossing the road, the traffic signal is red coloured. in this situation, if you try to cross the road, you maybe in danger. if you nitice a yellow coloured traffic signal, you should stop. if you notice a green coloured traffic signal, you should cross the road. so write va js code , where there is a variable called signal. its value can be green, yello or red and we will get different activities as output depending on the variable.

// module 20-1 no => var , let , const

let age = 10;
age = 11;

const countryName = "bangladesh";
// countryName = "chad"; // this const value can not change

console.log(age, countryName);

// module 20-2 no => unit convert inch to feet , miles to kilometer
// convert inch to feet: feet = inch / 12
const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

// convert miles to km : km = miles * 1.60934

function milesToKilo(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}
const milesValue = 12;
const mil = milesToKilo(milesValue);
console.log(mil);
// convert kg to gram


// module 20-3 no => check even or odd using function
function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);

    if(remainder === 0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
}
isEven(48);
isEven(77);

function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);

    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumberIsEven = isEven(48);
console.log(myNumberIsEven);
const myNumberIsOdd = isEven(77);
console.log(myNumberIsOdd);