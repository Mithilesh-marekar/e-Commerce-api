const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
// mongoose.connect('mongodb://0.0.0.0:27017', {

mongoose.connect("mongodb+srv://mithileshmarekar01:Wz8V39O64XjyFjxP@e-commerce-api.x97h4ln.mongodb.net/");
    useNewUrlParser: true;
    

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;