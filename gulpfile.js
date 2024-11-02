const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('minify-html', () => {
  return gulp.src('src/*.html') // Adjust the source directory as needed
    .pipe(sourcemaps.init()) // Initialize sourcemaps
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(sourcemaps.write('.')) // Write the source map to the same directory
    .pipe(gulp.dest('dist')); // Output directory for minified files
});

// Default task
gulp.task('default', gulp.series('minify-html'));
