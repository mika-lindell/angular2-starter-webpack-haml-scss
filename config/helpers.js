// HELPERS FOR WEBPACK CONFIG

var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
exports.devServer = 'http://192.168.0.100:8080/';
