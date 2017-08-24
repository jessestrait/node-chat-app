var moment = require('moment');
const readline = require('readline');

var date = moment();
//Working function for adding Days using moment!!
//--------------------------------------------------
function addDays(dObj, days) {
  dObj.add(days, 'day');

  //console.log('Add '+ days + ' days : ');
  console.log(dObj.format('M' + "/" + 'D'));
  //console.log('');

  date.subtract(days, 'day',);

}

function addHours(dObj, hours) {
  dObj.add(hours, 'hours');

  //console.log('Add '+ days + ' days : ');
  console.log(dObj.format('h A'));
  //console.log('');

  date.subtract(hours, 'hours',);

}
//--------------------------------------------------
//Working function Calls todays date and prints using moment!!
//--------------------------------------------------
function today() {
  //console.log('Today: ');
  console.log(date.format('M' + "/" + 'D'));
  //console.log('');
}
//--------------------------------------------------
//Working function sets date using moment!!
//--------------------------------------------------
var recDate;
function setDate (m, d, y) {

  recDate = moment(m + '-' + d + '-' + y, "MM-DD-YYYY");
  //console.log(recDate.format('M' + "/" + 'D'));

  //addDays(a, add);

}
//--------------------------------------------------
function displayLabel (name, exR, exP, exH){


  console.log('');
  console.log('');
  console.log('ITEM = '+ name );
  console.log('------------------');
  console.log('RECV = ');
  console.log(recDate.format('M' + "/" + 'D'));
  console.log('------------------');
  console.log('EXP DATE = ');
  if (exR === 0) {
    console.log('Use-By-Date');
  } else {
    addDays(recDate, exR);
  }
  console.log('------------------');
  var tdydate = moment();
  console.log('PREP = ');
  console.log(tdydate.format('M' + "/" + 'D'));
  console.log(tdydate.format('h A'));
  console.log('------------------');
  console.log('EXP DATE = ');
  addDays(tdydate, exP);
  addHours(tdydate, exH)
  console.log('');
  console.log('');

}
//--------------------------------------------------

function Topping (name, exrec, exprep, exhrs) {
  this.name = name;
  this.ExRec = exrec;
  this.ExPrep = exprep;
  this.ExHrs = exhrs;

}
//--------------------------------------------------
var pepperoni = new Topping ('Pepperoni', 30, 7, 48);
var bacon = new Topping ('Bacon', 30, 7, 48);
var beef = new Topping ('Beef', 12, 7, 24);
var sausage = new Topping ('Sausage', 12, 7, 24);
var itsausage = new Topping ('Italian Sausage', 12, 7, 24);
var cheese = new Topping ('Cheese', 14, 7, 24);
var parmCheese = new Topping ('Parmesan Cheese', 0, 10, 24);
var threeCheese = new Topping ('Three Cheese', 0, 7, 24);
var chicken = new Topping ('Chicken', 7, 7, 24);
var canadianBacon = new Topping ('Canadian Bacon', 0, 7, 24);

var banPepper = new Topping ('Banana Peppers', 0, 45, 48);
var jalPepper = new Topping ('Jalapenos Peppers', 0, 45, 48);
var greenPepper = new Topping ('Green Peppers', 0, 2, 24);
var mushroom = new Topping ('Mushroom', 0, 1, 24);
var greenPepper = new Topping ('Green Peppers', 0, 2, 24);
var olive = new Topping ('Olives', 0, 7, 48);
var onions = new Topping ('Onions', 0, 2, 24);
var pepperoncini = new Topping ('Pepperoncini Peppers', 0, 15, 12);
var pineapple = new Topping ('Pineapples', 0, 15, 48);
var tomato = new Topping ('Tomatoes', 0, 2, 24);

setDate(8, 20, 2017);
//displayLabel(pepperoni.name, pepperoni.ExRec, pepperoni.ExPrep);
//displayLabel(bacon.name, bacon.ExRec, bacon.ExPrep);
//displayLabel(chicken.name, chicken.ExRec, chicken.ExPrep);
displayLabel(chicken.name, chicken.ExRec, chicken.ExPrep, chicken.ExHrs);




















// console.log('EXP DATE = ' + addDays(date, 7) );
// console.log('------------------');
// today();
//
// addDays(date, 7);
//
// today();
//
// addDays(date, 12);
//
// setDate(11, 24, 2008);
//
// addDays(recDate, 12);
//
// //today();






//date.add(50, 'year').subtract(9, 'months');
//console.log(date.format('h:mm a'));
//console.log(date.format('MMM Do, YYYY'));
