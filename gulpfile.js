var gulp = require('gulp');
var inject = require('gulp-inject-string');
var fs = require('fs-extra');

gulp.task('inject-version', function () {
  let pkgVersion = JSON.parse(fs.readFileSync('./package.json')).version;

  gulp.src('src/environments/*.ts')
    .pipe(inject.after('version: \'', pkgVersion))
    .pipe(gulp.dest('src/environments'));
});

gulp.task('default', ['inject-version']);
