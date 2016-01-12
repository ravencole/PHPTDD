var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var notify = require('gulp-notify');
var clear = require('clear');

gulp.task('test', function() {
    clear();
    gulp.src('spec/**/*.php')
        .pipe(phpspec('', { notify: true }))
        .on('error', notify.onError({
            title: 'OOPS',
            message: 'Test failed, bro'
        }))
        .pipe(notify({
            title: 'SUCCESS',
            message: 'All tests are green',
            icon: __dirname + '/gulp_icon_success.png'
        }));
});

gulp.task('watch', function() {
    gulp.watch(['spec/**/*.php', 'src/**/*.php'], ['test']);
});

gulp.task('tdd', ['test', 'watch']);
