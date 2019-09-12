"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Example = _interopRequireDefault(require("./Example"));

var _ScreenValueUpdateForm = _interopRequireDefault(require("./ScreenValueUpdateForm"));

var _Todos = _interopRequireDefault(require("./Todos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return _react["default"].createElement(_Todos["default"], null);
}

var _default = App;
exports["default"] = _default;