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
function setDate (m, d, y) {

  var a = moment(m + '-' + d + '-' + y, "MM-DD-YYYY");
  console.log(a.format('dddd MMM Do, YYYY'));
  return a;
}
//--------------------------------------------------




today();
addDays(date, 7);
today();
addDays(date, 12);
setDate(11, 24, 2008);
addDays(a, 7);
















//date.add(50, 'year').subtract(9, 'months');
//console.log(date.format('h:mm a'));
//console.log(date.format('MMM Do, YYYY'));
