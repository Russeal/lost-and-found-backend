"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticFilesRoute = exports.filesRoutes = void 0;
var angularRoutePaths = ['/', '/items', '/my-items', '/new-item', '/items/{id}', '/edit-item/{id}', '/contact/{id}', '/{category}/items', '/en', '/en/items', '/en/my-items', '/en/new-item', '/en/items/{id}', '/en/edit-item/{id}', '/en/contact/{id}', '/en/{category}/items'];
var filesRoutes = angularRoutePaths.map(function (path) {
  return {
    method: 'GET',
    path: path,
    handler: function handler(req, h) {
      return h.file('dist/learn/index.html');
    }
  };
});
exports.filesRoutes = filesRoutes;
var staticFilesRoute = {
  method: 'GET',
  path: '/{params*}',
  handler: {
    directory: {
      path: 'dist/learn'
    }
  }
};
exports.staticFilesRoute = staticFilesRoute;