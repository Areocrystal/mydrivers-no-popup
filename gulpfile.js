const gulp = require('gulp');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cssminify = require('gulp-minify-css');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
// const uglify = composer(uglifyes, console);

gulp.task('js-operate', function() {
    // 1. 找到文件
    gulp.src('./core.js')
    // 2. 压缩文件
    //     .pipe(rename({suffix: '.min'}))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify({mangle: true}))
        .on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'))
});
gulp.task('auto', function() {
    gulp.watch('./main.js', ['script']);
    gulp.watch('./*.css', ['css']);
});
gulp.task('default', ['auto']);

gulp.task('css-operate', function() {
    // 1. 找到文件
    gulp.src('./static/style.css')
    // 2. 压缩文件
    //     .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '>5%'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        // 3. 另存压缩后的文件
        .pipe(cssminify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./static'))
});