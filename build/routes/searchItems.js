"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchItemsRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var searchItemsRoute = {
  method: 'POST',
  path: '/api/search',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var _req$payload, _req$payload$str, str, _req$payload$location, location, text1, text2, _yield$db$query, results;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$payload = req.payload, _req$payload$str = _req$payload.str, str = _req$payload$str === void 0 ? '' : _req$payload$str, _req$payload$location = _req$payload.location, location = _req$payload$location === void 0 ? '' : _req$payload$location;
              text1 = "%" + str + "%";
              text2 = "%" + location + "%";
              _context.next = 5;
              return _database.db.query("\n            SELECT * FROM items\n                WHERE LOWER(CONCAT(name, '', details, '')) LIKE LOWER(?)\n                and LOWER(CONCAT(location, '')) LIKE LOWER(?)\n            ", [text1, text2]);

            case 5:
              _yield$db$query = _context.sent;
              results = _yield$db$query.results;
              return _context.abrupt("return", results);

            case 8:
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
exports.searchItemsRoute = searchItemsRoute;