const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');



// create express app
const app = express();

mongoose.Promise = global.Promise;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
require('./app/routes/note.routes.js')(app);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});



mongoose.connect('mongodb://localhost:27017/usercrud', { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));