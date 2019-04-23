"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _restifyRouter = require("restify-router");

var _indexController = _interopRequireDefault(require("./controllers/index-controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _restifyRouter.Router();
router.get('/', _indexController["default"].get);
var _default = router;
exports["default"] = _default;