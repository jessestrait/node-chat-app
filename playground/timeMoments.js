var moment = require('moment');
const readline = require('readline');

var date = moment();

//Working function for adding Days using moment!!
//--------------------------------------------------
function addDays(dObj, days) {
  dObj.add(days, 'day');

  console.log('Add '+ days + ' days : ');
  console.log(dObj.format('dddd MMM Do, YYYY'));
  console.log('');

  date.subtract(days, 'day',);

}
//--------------------------------------------------


//Working function Calls todays date and prints using moment!!
//--------------------------------------------------
function today() {
  console.log('Today: ');
  console.log(date.format('dddd MMM Do, YYYY'));
  console.log('');
}
//--------------------------------------------------


//Working function sets date using moment!!
//--------------------------------------------------
var recDate;
function setDate (m, d, y) {

  recDate = moment(m + '-' + d + '-' + y, "MM-DD-YYYY");
  console.log(recDate.format('dddd MMM Do, YYYY'));

  //addDays(a, add);

}
//--------------------------------------------------




today();

addDays(date, 7);

today();

addDays(date, 12);

setDate(11, 24, 2008);

addDays(recDate, 12);

//today();















//date.add(50, 'year').subtract(9, 'months');
//console.log(date.format('h:mm a'));
//console.log(date.format('MMM Do, YYYY'));
