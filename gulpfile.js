var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: '*'});

gulp.task('bowerUpdate', $.shell.task([
    'bower install'
]))

gulp.task('compileVendorJS', function () {
    return gulp.src($.mainBowerFiles({filter: "**/*.js"}))
        .pipe($.filelog())
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest('./dist'))
        .pipe($.notify({message: 'Vendor JS compiled!'}));
});

gulp.task('bundleAMD', function () {
    return gulp.src("app/**/*.js")
        .pipe($.concat('app.js'))
        //.pipe($.insert.append('require(["dist/app"]);'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('bundleCombine', function () {
    return gulp.src(["dist/vendor.js", "dist/app.js"])
        .pipe($.concat('app.min.js', {
            newLine:';'
        }))
        .pipe($.uglify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('default', function (params) {
    $.runSequence('bowerUpdate', 'compileVendorJS', 'bundleAMD', 'bundleCombine');
});
