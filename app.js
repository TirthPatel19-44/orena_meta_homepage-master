//importing all the libraries
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
// C:\Users\meghp\Desktop\Orena Project\orena_meta_homepage-master-master\app.js
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(express.static("public"));

//connecting to the database
mongoose.connect(
	"mongodb+srv://admin-Tirth:tirth1012@cluster0.adsgo.mongodb.net/jordInternationalDB?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
	}
);

//creating registrationSchema
const registrationSchema = {
	firstName: String,
	lastName: String,
	email: String,
};

//creating registration model
const registration = mongoose.model("Registration", registrationSchema);

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/lounge", function (req, res) {
	res.sendFile(__dirname + "/tech_lounge/tech_lounge_index.html");
});

// Starting the server on port 3000
let port = process.env.PORT;
if (port == null || port == "") {
	port = 3000;
}

app.listen(port, function () {
	console.log("Server has started on port Successfully");
});
