"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverName = exports.port = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var port = Number(process.env.PORT) || 3000;
exports.port = port;
var serverName = process.env.SERVER_NAME || 'ASRDokaponBackend';
exports.serverName = serverName;