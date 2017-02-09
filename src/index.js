import 'babel-polyfill';
import through from 'through2';

export default function() {

  const transform = function(file, encode, callback) {
    this.push(file);
    callback();
  };

  const flush = function(callback) {
    callback();
  };

  return through.obj(transform, flush);

}
