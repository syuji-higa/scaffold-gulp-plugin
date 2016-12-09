import gulpPlugin from '../lib/index';
import { File } from 'gulp-util';
import { join } from 'path';
import fs from 'fs';

const createFile = (path) => {
  const _path = join(__dirname, './fixtures', path);
  return new File({
    path    : _path,
    contents: fs.readFileSync(_path),
  });
};

describe('gulp-plugin', () => {

  it('test', (done) => {
    const _stream = gulpPlugin();
    _stream.on('data', (file) => {
      fs.writeFile(file.path, file.contents, 'binary', (err) => {
        if(err) console.log(err);
      });
    });
    _stream.on('end', done.bind(this));
    _stream.write(createFile('sample.txt'));
    _stream.end();
  });

});
