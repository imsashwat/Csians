const express = require('express')
const srv = express();
const index = require('./routes/index')


srv.use('/public', express.static(__dirname + "/public"))
srv.use('/public', express.static(__dirname + "/routes"))

//using routes folder
srv.use('/index', index)

srv.listen(4567)