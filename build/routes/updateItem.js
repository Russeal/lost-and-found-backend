"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateItemRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var admin = _interopRequireWildcard(require("firebase-admin"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var updateItemRoute = {
  method: 'POST',
  path: '/api/items/{id}',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, _req$payload, _req$payload$name, name, _req$payload$category, category, _req$payload$status, status, _req$payload$date, date, _req$payload$time, time, _req$payload$location, location, _req$payload$details, details, token, user, profile_id, _yield$db$query, results;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.params.id;
              _req$payload = req.payload, _req$payload$name = _req$payload.name, name = _req$payload$name === void 0 ? '' : _req$payload$name, _req$payload$category = _req$payload.category, category = _req$payload$category === void 0 ? '' : _req$payload$category, _req$payload$status = _req$payload.status, status = _req$payload$status === void 0 ? '' : _req$payload$status, _req$payload$date = _req$payload.date, date = _req$payload$date === void 0 ? '' : _req$payload$date, _req$payload$time = _req$payload.time, time = _req$payload$time === void 0 ? '' : _req$payload$time, _req$payload$location = _req$payload.location, location = _req$payload$location === void 0 ? '' : _req$payload$location, _req$payload$details = _req$payload.details, details = _req$payload$details === void 0 ? '' : _req$payload$details;
              token = req.headers.authorization;
              _context.next = 5;
              return admin.auth().verifyIdToken(token);

            case 5:
              user = _context.sent;
              profile_id = user.user_id;
              _context.next = 9;
              return _database.db.query("UPDATE items\n                SET  name=?, category=?, status=?, date=?, time=?, location=?, details=?\n                WHERE id=? AND profile_id=?\n            ", [name, category, status, date, time, location, details, id, profile_id]);

            case 9:
              _context.next = 11;
              return _database.db.query("\n            SELECT * FROM items WHERE id=? and profile_id=?\n            ", [id, profile_id]);

            case 11:
              _yield$db$query = _context.sent;
              results = _yield$db$query.results;
              return _context.abrupt("return", results[0]);

            case 14:
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
exports.updateItemRoute = updateItemRoute;