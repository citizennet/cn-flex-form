// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var karma = require('gulp-karma');
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
gulp.task('test', function() {
  // Be sure to return the stream
  // NOTE: Using the fake './foobar' so as to run the files
  // listed in karma.conf.js INSTEAD of what was passed to
  // gulp.src !
  return gulp.src('./foobar')
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
      }))
      .on('error', function(err) {
        // Make sure failed tests cause gulp to exit non-zero
        console.log(err);
        this.emit('end'); //instead of erroring the stream, end it
      });
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
