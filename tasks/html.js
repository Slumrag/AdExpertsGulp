const { src, dest } = require('gulp');
const fileinclude = require('gulp-file-include');
const bs = require('browser-sync');

module.exports = function html() {
  return src(['src/**/*.html', '!src/components/**/*.html'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(dest('build'))
    .pipe(bs.stream());
};
