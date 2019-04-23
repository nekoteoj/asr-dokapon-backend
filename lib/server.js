"use strict";

var _restify = _interopRequireDefault(require("restify"));

var _restifyPinoLogger = _interopRequireDefault(require("restify-pino-logger"));

var _router = _interopRequireDefault(require("./router"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = _restify["default"].createServer({
  name: _config.serverName
});

server.use((0, _restifyPinoLogger["default"])());
server.use(_restify["default"].plugins.queryParser({
  mapParams: false
}));
server.use(_restify["default"].plugins.bodyParser({
  mapParams: false
}));

_router["default"].applyRoutes(server);

server.listen(_config.port, function () {
  console.log("".concat(server.name, " is listening at ").concat(server.url));
});