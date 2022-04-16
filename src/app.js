<<<<<<< HEAD
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const eventRouter = require("./routers/event");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(eventRouter);

module.exports = app;
=======
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const eventRouter = require("./routers/event");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(eventRouter);

module.exports = app;
>>>>>>> b8bbd516d5603795fad9dca7c28a9d42c94d548b
