const path = require("path");
const staticFile = require("../app-modules/http-utils/static-file");
const mimeTypes = require("../app-modules/http-utils/mime-types");

const defaultRouteController = async (res, url) => {
	const extname = String(path.extname(url)).toLowerCase();
	if (extname in mimeTypes) {
		staticFile(res, url, extname);
	} else {
		res.statusCode = 404;
		res.end("Not Found");
	}
};

module.exports = defaultRouteController;
