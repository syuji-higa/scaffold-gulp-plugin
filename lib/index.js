'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  var transform = function transform(file, encode, callback) {
    this.push(file);
    callback();
  };
  var flush = function flush(callback) {
    callback();
  };
  return _through2.default.obj(transform, flush);
};
require('babel-polyfill');
var _through = require('through2');
var _through2 = _interopRequireDefault(_through);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }