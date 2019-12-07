"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FSStorage = _interopRequireDefault(require("../server/FSStorage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Todo(_ref) {
  var todo = _ref.todo,
      index = _ref.index,
      completeTodo = _ref.completeTodo,
      removeTodo = _ref.removeTodo;
  return _react["default"].createElement("div", {
    style: {
      textDecoration: todo.isComplete ? 'line-through' : ''
    },
    className: "todo"
  }, todo.text, _react["default"].createElement("div", null, _react["default"].createElement("button", {
    onClick: function onClick() {
      return completeTodo(index);
    }
  }, "Complete"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return removeTodo(index);
    }
  }, "x")));
}

function TodoForm(_ref2) {
  var addTodo = _ref2.addTodo;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return _react["default"].createElement("form", {
    onSubmit: handleSubmit
  }, _react["default"].createElement("input", {
    type: "text",
    className: "input",
    value: value,
    placeholder: "Add Todo..",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }));

  function changeValue() {}
}

function ScreenValueUpdateForm() {
  // Declare a new state variable, which we'll call "count"
  //console.log(getDivs("Ii5D5QX7RPqFPOrSx76O"))
  var _useState3 = (0, _react.useState)([{
    text: 'Learn About React',
    isComplete: false
  }, {
    text: 'Meet Friend for lunch',
    isComplete: false
  }, {
    text: 'Build cool todo app',
    isComplete: false
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      todos = _useState4[0],
      setTodos = _useState4[1];

  var addTodo = function addTodo(text) {
    var newTodos = [].concat(_toConsumableArray(todos), [{
      text: text
    }]);

    _FSStorage["default"].getDivs('Ii5D5QX7RPqFPOrSx76O');

    console.log("added");
    setTodos(newTodos);
  };

  var completeTodo = function completeTodo(index) {
    var newTodos = _toConsumableArray(todos);

    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  var removeTodo = function removeTodo(index) {
    var newTodos = _toConsumableArray(todos);

    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return _react["default"].createElement("div", {
    className: "todos"
  }, _react["default"].createElement("div", {
    className: "todo-list"
  }, todos.map(function (todo, index) {
    return (//{todo.text}
      _react["default"].createElement(Todo, {
        key: index,
        index: index,
        todo: todo,
        completeTodo: completeTodo,
        removeTodo: removeTodo
      })
    );
  }), _react["default"].createElement(TodoForm, {
    addTodo: addTodo
  })));
}

var _default = ScreenValueUpdateForm;
exports["default"] = _default;