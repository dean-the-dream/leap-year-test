let leapYear;
let year = prompt("Enter a year to see if it is a leap year!");

let yearNum = Number(year);

if (!(year % 4) && !(year % 100) && !(year % 400)) {
    leapYear = true;
}
else{
    leapYear = false;
}