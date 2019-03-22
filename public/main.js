//jquery function
$('#cse1').click(function() {
    $('#data1').html(fetchCominUp(1));
})

//jquery function
$('#cse2').click(function() {
    $('#data2').html(fetchCominUp(2));
})

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
var day = days[d.getDay()];

console.log(day)
console.log(section)

function fetchCominUp(sec){
    if (sec === 1) {
        if(day === "Monday"){
            var classes = new Array();
            classes[0] = "CG";
            classes[1] = "DW";
            classes[2] = "CD";
            classes[3] = "CN";
            return classes;
          }
          if(day === "Tuesday"){
            var classes = new Array();
            classes[0] = "CD";
            classes[1] = "CN";
            classes[2] = "DW-Lab A & CG-Lab B";
            classes[3] = "CG-Lab B & DW-Lab b";
            return classes;
          }
          if(day === "Wednesday"){
            var classes = new Array();
            classes[0] = "Apti";
            classes[1] = "Apti";
            classes[2] = "DW";
            classes[3] = "CG";
            return classes;
          }
          if(day === "Thursday"){
            var classes = new Array();
            classes[0] = "IM";
            classes[1] = "CN";
            classes[2] = "CD";
            classes[3] = "IS";
            return classes;
          }
          if(day === "Friday"){
            var classes = new Array();
            classes[0] = "DW";
            classes[1] = "CG";
            classes[2] = "CN-Lab A & CD-Lab B";
            classes[3] = "CD-Lab B & CN-Lab B";
            return classes;
          }
          if(day === "Saturday"){
            var classes = new Array();
            classes[0] = ".NET";
            classes[1] = "JAVA";
            classes[2] = "NPTEL";
            classes[3] = "SPorts";
            return classes;
          }
          if(day === "Sunday"){
            var classes = new Array();
            classes[0] = "Closed";
            classes[1] = "Closed";
            classes[2] = "Closed";
            classes[3] = "Closed";
            return classes;
          }
          return false;
    }

    else if(sec === 2){
        if(day === "Monday"){
            var classes = new Array();
            classes[0] = "CD";
            classes[1] = "CG/WT";
            classes[2] = "CN";
            classes[3] = "DW";
            return classes;
          }
          if(day === "Tuesday"){
            var classes = new Array();
            classes[0] = "DW";
            classes[1] = "CG/WT";
            classes[2] = "CD";
            classes[3] = "CN";
            return classes;
          }
          if(day === "Wednesday"){
            var classes = new Array();
            classes[0] = "IM";
            classes[1] = "DW";
            classes[2] = "CN-Lab A & CD-Lab B";
            classes[3] = "CD-Lab A & CN-Lab B";
            return classes;
          }
          if(day === "Thursday"){
            var classes = new Array();
            classes[0] = "Apti";
            classes[1] = "Apti";
            classes[2] = "DW-Lab A & CG-lab B/WT-Lab(IT)";
            classes[3] = "CG-Lab A & DW-Lab B";
            return classes;
          }
          if(day === "Friday"){
            var classes = new Array();
            classes[0] = "CN";
            classes[1] = "CD";
            classes[2] = "CG/WT";
            classes[3] = "IS";
            return classes;
          }
          if(day === "Saturday"){
            var classes = new Array();
            classes[0] = ".NET";
            classes[1] = "JAVA";
            classes[2] = "NPTEL";
            classes[3] = "SPorts";
            return classes;
          }
          if(day === "Sunday"){
            var classes = new Array();
            classes[0] = "Closed";
            classes[1] = "Closed";
            classes[2] = "Closed";
            classes[3] = "Closed";
            return classes;
          }
          return false;
    }
}