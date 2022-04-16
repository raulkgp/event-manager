<<<<<<< HEAD
const app = require("./app");
const port = process.env.PORT;
//const port = 3000;
app.listen(port, () => {
	console.log("Server is up on port " + port);
});
=======
const app = require("./app");
//const port = process.env.PORT;
const port = 3000;
app.listen(port, () => {
	console.log("Server is up on port " + port);
});
>>>>>>> b8bbd516d5603795fad9dca7c28a9d42c94d548b
