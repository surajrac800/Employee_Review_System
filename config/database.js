const mongoose = require("mongoose");
 
mongoose.connect("mongodb+srv://suraj:suraj123@cluster0.rkensfl.mongodb.net/Employee?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




const db = mongoose.connection; 

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successfully to Database");
});

// exporting the connection.
module.exports = db;
