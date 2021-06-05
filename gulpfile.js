const browserSync = require('browser-sync'); // подключаем browser sync
function myServer() {
    browserSync.init({
        server: {
            baseDir: 'app' // здесь указываем корневую папку для локального сервера 
        },
        notify: false      // уведомления (false - отключение) 
    });
}function HTML() {
    return src('/*.html', { since: lastRun('html') })
        .pipe(dest('dist/'))           // перенос HTML в папку деплоя 
        .pipe(browserSync.stream())
}

exports.HTML = HTML;

watch('/*.html', { usePolling: true }, HTML); // следим за изменениями HTML

exports.default = series(HTML, myServer);

const { src, dest, watch, lastRun, series, parallel } = require('gulp');
const browserSync = require('browser-sync'); // подключаем browser sync 

function HTML() {
    return src('/*.html', { since: lastRun(HTML) })
        .pipe(dest('dist/'))           // перенос HTML в папку деплоя 
        .pipe(browserSync.stream())    // обновление страницы 
}
exports.HTML = HTML;

function myServer() {
    browserSync.init({
        server: {
            baseDir: 'newsite' // здесь указываем корневую папку для локального сервера 
        },
        notify: false      // отключаем уведомления 
    });

    watch('/*.html', { usePolling: true }, HTML); // следим за изменениями HTML 
}

exports.default = series(HTML, myServer);