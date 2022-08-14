// const userYear; = document.getElementsByTagName("input")[0].value;
let userYear;
let leapYear;

function changeYear() {
    userYear = document.getElementsByTagName("input")[0].value;
    document.getElementById("year").innerHTML = userYear;
    userYearNum = Number(userYear);   
}



function yearResults() {
    if (!(userYearNum % 4)){
        if (!(userYearNum % 100)) {
            if (!(userYearNum % 400)) {
                leapYear = "is a Leap Year!"; 
            } else {
                leapYear = "is not a Leap Year";
            }
        } else {
            leapYear = "is a Leap Year!";
        }
    } else {
        leapYear = "is not a Leap Year";
    }

    document.getElementById("result").innerHTML = leapYear;
    document.getElementById("tagline").innerHTML = "Enter another year to try again!";
}

// document.getElementById("year").onclick = changeYear()

// userYear = document.getElementsByTagName("input")[0].value
// document.getElementById("year").innerHTML = userYear
console.log(userYear);
console.log(document.getElementById("result").TEXT_NODE);