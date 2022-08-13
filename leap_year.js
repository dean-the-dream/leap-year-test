// const userYear; = document.getElementsByTagName("input")[0].value;
let userYear;
let leapYear;

function changeYear() {
userYear = document.getElementsByTagName("input")[0].value;
document.getElementById("year").innerHTML = userYear;
    
}

userYearNum = Number(userYear);

function yearResults(){
    if (!(userYear % 4) && !(userYear % 100) && !(userYear % 400)) { 
    leapYear = "is a Leap Year!"
    }
    else {
        leapYear = "is not a Leap Year"
    }
    document.getElementById("result").innerHTML = leapYear
}

// document.getElementById("year").onclick = changeYear()

// userYear = document.getElementsByTagName("input")[0].value
// document.getElementById("year").innerHTML = userYear
console.log(userYear);
console.log(document.getElementById("result").TEXT_NODE) 