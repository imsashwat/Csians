//function to get today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(today);
var dayName = days[d.getDay()];
console.log(dayName)

let Friday = [
    "CG",
    "DW",
    "CD",
    "CN",
]

function check () {
    if(today == "Friday"){
        return ("day" + true);
    }

    return false
}

check(Friday);