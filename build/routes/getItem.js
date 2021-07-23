"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _boom = require("@hapi/boom");

var _database = require("../database");

var getItemRoute = {
  method: 'GET',
  path: '/api/items/{id}',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, _yield$db$query, results, item;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.params.id;
              _context.next = 3;
              return _database.db.query('SELECT * from items WHERE id=?', [id]);

            case 3:
              _yield$db$query = _context.sent;
              results = _yield$db$query.results;

              if (results[0]) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", "There is no such fucking item");

            case 7:
              item = results[0];
              return _context.abrupt("return", item);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }

    return handler;
  }()
};
exports.getItemRoute = getItemRoute;