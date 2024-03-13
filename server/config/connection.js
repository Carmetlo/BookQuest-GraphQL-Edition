const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mcarmelo:Dumb12345@cluster0.qs7xm9o.mongodb.net/googlebooks?&retryWrites=true&w=majority&appName=Cluster0");

module.exports = mongoose.connection;
