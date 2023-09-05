const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB

// for local computer
// mongoose.connect('mongodb://0.0.0.0:27017', {

// for connecting to mongoDb srerver.
mongoose.connect("mongodb+srv://mithileshmarekar01:Wz8V39O64XjyFjxP@e-commerce-api.x97h4ln.mongodb.net/?retryWrites=true&w=majority");
    useNewUrlParser: true;

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;