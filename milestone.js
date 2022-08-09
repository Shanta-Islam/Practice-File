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
