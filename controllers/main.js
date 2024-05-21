const { getData, endpoints } = require("../app-modules/api");
const staticFile = require("../app-modules/http-utils/static-file");

const mainRouteController = async (res, publicUrl, extname) => {
	const data = await getData(endpoints.games);

	res.statusCode = 200;
	staticFile(res, publicUrl, extname);
};
module.exports = mainRouteController;
