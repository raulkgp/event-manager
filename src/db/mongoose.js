<<<<<<< HEAD
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/event-manager").then(
	() => {
		console.log("Connected to database.");
	},
	(err) => {
		console.log(err);
	}
);
=======
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/event-manager").then(
	() => {
		console.log("Connected to database.");
	},
	(err) => {
		console.log(err);
	}
);
>>>>>>> b8bbd516d5603795fad9dca7c28a9d42c94d548b
