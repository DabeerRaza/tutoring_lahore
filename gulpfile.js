var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var bowerpath =  'bower_components/';

var loadPath = {
    sassDir                 :       'assets/sass/',
    bootstrap__thirdparty   :       bowerpath + 'bootstrap-sass/assets/stylesheets',
    animation__thirdparty   :       bowerpath + 'animate-sass/',
    cssDir                  :       './',
    JSDir                   :       './js/'    
    //slickjs__thirdparty     :        bowerpath + 'slick-carousel/slick.js',
}

var sassOPTIONS =  {
    sourceComments      :   'map',
    sourceMap           :   'sass',
    includePaths        :   [ loadPath.bootstrap__thirdparty ],
    errLogToConsole     :   true,
    outputStyle         :   'nested'
}

var autoprefixerOPTIONS = {
    browsers: ['> 5%', 'last 2 versions', 'Opera >= 12', 'Explorer >= 8', 'Firefox >= 18', 'IOS >= 6', 'Safari >= 3', 'Android 2.3', 'Android >= 4' ]
   
}


gulp.task('sass', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass(sassOPTIONS).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOPTIONS))
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(notify({ message : "it worked!" }))
        .pipe(gulp.dest(loadPath.cssDir));
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

