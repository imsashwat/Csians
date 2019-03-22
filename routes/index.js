const route = require('express').Router();
const path = require('path');



//Routes

//GET homepage

route.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'.index.html'));
})

//GET syllabus
route.get('/syllabus', function (req, res) {
    res.sendFile(path.join(__dirname+'/syllabus.html'));
})


module.exports = route
