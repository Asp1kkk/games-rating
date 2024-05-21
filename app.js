const http = require("http");
const mc = require("./controllers/main.js");
const dc = require("./controllers/default.js");
const gc = require("./controllers/game.js");
const vc = require("./controllers/vote.js");

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			mc(res, "index.html", ".html");
			break;
		case "/game":
			gc(res);
			break;
		case "/vote":
			vc(req, res);
			break;
		default:
			dc(res, url);
	}
});

server.listen(3005);
