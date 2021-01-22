//repo link: https://github.com/KzScope/assignment-03-JS

//Tasks to be completed
// kilometerToMeter TASK 01
// budgetCalculator
// hotelCost 
//megaFriend 


//TASK 01 - Convert kilometer into Meter

function kilometerToMeter(userInput){
    var kilo = 1000;
    var meter = userInput * kilo;
    return meter;
}

var userInput = 10;   

var result = kilometerToMeter(userInput);
console.log(userInput,"Kilometer is =",result,"meter");


//TASK 02 - Create a Budget Calculator using fuction

function budgetCalculator(budget){    
    var watchExpense = watchUnit * 50;
    var mobileExpense = mobileUnit * 100;
    var laptopExpense = laptopUnit * 500;
    var budget = watchExpense + mobileExpense + laptopExpense;
    return budget;
}

var watchUnit = 5;
var mobileUnit = 5;
var laptopUnit = 5;

var budget = budgetCalculator(budget);
console.log("I need total:", budget, "Taka");

//TASK 03 - Hotel costing calculation

function hotelCost(dayCount){
    var totalBill = 0;
    if(dayCount <= 10){
        totalBill = dayCount * 100;
    }
    else if(dayCount <= 20){
        var slab1 = 10 * 100;
        var reminder = dayCount - 10;
        var slab2 = reminder * 80;
        totalBill = slab1 + slab2;
    }
    else {
        var slab1 = 10 * 100;
        var slab2 = 10 * 80;
        var reminder = dayCount - 20;
        var slab3 = reminder * 50;
        totalBill = slab3 + slab2 + slab1;
    }
    return totalBill;
}

var dayCount = 17;

var Invoice = hotelCost(dayCount);
console.log("Your total bill is:", Invoice, "Pay at checkout point");

//TASK 04 - find longest name in an array

function megaFriend(friendsName){
    var longest = friendsName[0];
for (var i = 0; i< friendsName.length; i++){
    var element = friendsName[i];
    if (element > longest){
        longest = element;
        }
    }
    return longest;
}


var friendsName = ["Ali", "Mali", "Jalia", "Naliya"];
var result = megaFriend(friendsName);
console.log("Longest Name is:", result);


// assingment completed ---- //
