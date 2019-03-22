//Time table generator

//program to find today's day name
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = mm + '/' + dd + '/' + yyyy;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(today);
var dayName = days[d.getDay()];

//function to choose class section and generate its time table accordingly
function fetchCominUp(day, sec) {
    var classes = new Array();
    if (sec === 1) {
        if (day === "Monday") {
            classes = ["Computer Graphics", "Data WareHouse", "Compiler Design", "Computer Network"];
        } else if (day === "Tuesday") {
            classes = ["Compiler Design", "Computer Network", "DW-Lab (A) & CG-Lab (B)", "CG-Lab (B) & DW-Lab (b)"];
        } else if (day === "Wednesday") {
            classes = ["Aptitude", "Aptitude", "Data Warehouse", "Computer Graphics"];
        } else if (day === "Thursday") {
            classes = ["Ind. Management", "Computer Network", "Compiler Design", "Ind. Sociology"];
        } else if (day === "Friday") {
            classes = ["Data Warehouse", "Computer Graphics", "CN-Lab (A) & CD-Lab (B)", "CD-Lab (B) & CN-Lab (B)"];
        } else if (day === "Saturday") {
            classes = [".NET", "JAVA", "NPTEL", "Sports"];
        } else if (day === "Sunday") {
            classes = ["Closed", "Closed", "Closed", "Closed"];
        } else {
            return false;
        }
    } else if (sec === 2) {
        if (day === "Monday") {
            classes = ["Compiler Design", "CG/WT", "Compiler Network", "Data Warehouse"];
        } else if (day === "Tuesday") {
            classes = ["Data Warehouse", "CG/WT", "Compiler Design", "Compiler Network"];
        } else if (day === "Wednesday") {
            classes = ["Ind. Management", "Data Warehouse", "CN-Lab (A) & CD-Lab (B)", "CD-Lab (A) & CN-Lab (B)"];
        } else if (day === "Thursday") {
            classes = ["Aptitude", "Aptitude", "DW-Lab (A) & CG-lab (B)/WT-Lab(IT)", "CG-Lab (A) & DW-Lab (B)"];
        } else if (day === "Friday") {
            classes = ["Compiler Network", "Compiler Design", "CG/WT", "Ind. Sociology"];
        } else if (day === "Saturday") {
            classes = [".NET", "JAVA", "NPTEL", "Sports"];
        } else if (day === "Sunday") {
            classes = ["Closed", "Closed", "Closed", "Closed"];
        } else {
            return false;
        }
    }
    return classes;
}

//jquery function to perform on click operations
$(document).ready(function () {

    $("#cse1").click(function () {
        var data = fetchCominUp(dayName, 1);

        $('.section_a').html(makeUL(data));
    })
    $("#cse2").click(function () {
        var data = fetchCominUp(dayName, 2);
        $('.section_b').html(makeUL(data));
    })

});

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}