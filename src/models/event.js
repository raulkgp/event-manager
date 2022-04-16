<<<<<<< HEAD
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
	{
		e_code: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		date: {
			type: Date,
			required: true,
			trim: true,
		},
		owner: {
			type: String,
			required: true,
			ref: "User",
		},
		invited: {
			type: [],
		},
	},
	{
		timestamps: true,
	}
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
=======
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
	{
		e_code: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		owner: {
			type: String,
			required: true,
			ref: "User",
		},
		invited: {
			type: [],
		},
	},
	{
		timestamps: true,
	}
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
>>>>>>> b8bbd516d5603795fad9dca7c28a9d42c94d548b
