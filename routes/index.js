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

//GET notes
route.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname+'./notes.html'));
})

//GET events
route.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname+'./events.html'));
})

//GET contribute
route.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname+'./contribute.html'));
})


module.exports = route
