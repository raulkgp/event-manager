<<<<<<< HEAD
const express = require("express");
const Event = require("../models/event");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/event", auth, async (req, res) => {
	const event = new Event({
		...req.body,
		owner: req.user.name,
	});

	try {
		await event.save();
		res.status(201).send(event);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get("/list", auth, async (req, res) => {
	try {
		let { page, size, sort } = req.query;
		if (!page) {
			page = 1;
		}
		if (!size) {
			size = 10;
		}
		if (!sort) {
			sort = 1;
		}

		const limit = parseInt(size);

		const created_events = await Event.find({ owner: req.user.name })
			.sort({ date: sort })
			.limit(limit);
		const invited_events = await Event.find({ invited: req.user.username })
			.sort({ date: sort })
			.limit(limit);

		const pageCount = Math.ceil(created_events.length / limit);
		if (page > pageCount) {
			page = pageCount;
		}
		res.send({
			page,
			size,
			"Created Events": created_events.slice(
				page * limit - limit,
				page * limit
			),
			"Invited Events": invited_events.slice(
				page * limit - limit,
				page * limit
			),
		});
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get("/event/:name", auth, async (req, res) => {
	const name = req.params.name;

	try {
		const event = await Event.findOne({ name, owner: name });

		if (!event) {
			return res.status(404).send();
		}

		res.send(event);
	} catch (e) {
		res.status(500).send();
	}
});

router.get("/event/time/:time", auth, async (req, res) => {
	const name = req.params.name;

	try {
		const event = await Event.find({ date: req.params.time });
		if (!event) {
			return res.status(404).send();
		}

		res.send(event);
	} catch (e) {
		res.status(500).send();
	}
});

router.patch("/event/:name", auth, async (req, res) => {
	try {
		const event = await Event.findOne({ name: req.params.name });
		event["description"] = req.body.description;
		await event.save();
		res.send(event);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.patch("/invite", auth, async (req, res) => {
	try {
		const e_code = req.body.e_code;
		const new_invites = req.body.new_invites;
		const event = await Event.findOne({ e_code, owner: req.user.name });
		event.invited = event.invited.concat(new_invites);
		await event.save();
		res.send(event);
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
});

module.exports = router;
=======
const express = require("express");
const Event = require("../models/event");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/event", auth, async (req, res) => {
	const event = new Event({
		...req.body,
		owner: req.user.name,
	});

	try {
		await event.save();
		res.status(201).send(event);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get("/list", auth, async (req, res) => {
	try {
		const created_events = await Event.find({ owner: req.user.name });
		const invited_events = await Event.find({ invited: req.user.username });
		res.send({ created_events, invited_events });
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get("/event/:name", auth, async (req, res) => {
	const name = req.params.name;

	try {
		const event = await Event.findOne({ name, owner: name });

		if (!event) {
			return res.status(404).send();
		}

		res.send(event);
	} catch (e) {
		res.status(500).send();
	}
});

router.patch("/event/:name", auth, async (req, res) => {
	try {
		const event = await Event.findOne({ name: req.params.name });
		event["description"] = req.body.description;
		await event.save();
		res.send(event);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.patch("/invite", auth, async (req, res) => {
	try {
		const e_code = req.body.e_code;
		const new_invites = req.body.new_invites;
		const event = await Event.findOne({ e_code, owner: req.user.name });
		event.invited = event.invited.concat(new_invites);
		await event.save();
		res.send(event);
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
});

module.exports = router;
>>>>>>> b8bbd516d5603795fad9dca7c28a9d42c94d548b
