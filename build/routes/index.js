"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _createNewItem = require("./createNewItem");

var _deleteItem = require("./deleteItem");

var _files = require("./files");

var _getAllItems = require("./getAllItems");

var _getItem = require("./getItem");

var _getItemsByCategory = require("./getItemsByCategory");

var _getProfileItems = require("./getProfileItems");

var _updateItem = require("./updateItem");

var _default = [_getAllItems.getAllItemsRoute, _getItem.getItemRoute, _getProfileItems.getProfileItemsRoute, _createNewItem.createNewItemRoute, _updateItem.updateItemRoute, _deleteItem.deleteItemRoute, _files.staticFilesRoute, _getItemsByCategory.getItemsByCategoryRoute].concat((0, _toConsumableArray2["default"])(_files.filesRoutes));

exports["default"] = _default;