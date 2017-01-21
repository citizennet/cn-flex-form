// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var karma = require('karma').Server;
var babel = require('gulp-babel');

// Lint Task
gulp.task('lint', function() {
  return gulp.src('src/*.js')
      .pipe(eslint.format({
        multistr: true,
        validthis: true,
        evil: true
      }));
});

// Test
gulp.task('test', function(done) {
  new karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

// Concatenate & Transpile JS
gulp.task('scripts', function() {
  return gulp.src(['src/*.js', '!src/*.test.js'])
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dist'))
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['lint', 'scripts']);
});

// Default Task sans watch
gulp.task('build', ['lint', 'scripts'/*, 'test'*/]);

// Default Task
gulp.task('default', ['build', 'watch']);
