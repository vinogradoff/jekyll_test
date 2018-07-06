const gulp = require('gulp')
	, browserSync = require('browser-sync').create('server')
	, configs = require('../configs');

// server
gulp.task('server', () => {
	browserSync.init({
		server: {
			baseDir: configs.site
			, directory: false
		}
		, files: [
			configs.site + '/**/*.html',
			configs.site + '/**/*.css',
			configs.site + '/**/*.js',
			configs.site + '/img/**/*'
		]
		, logLevel: 'info' // 'debug', 'info', 'silent', 'warn'
		, logFileChanges: true
		, logConnections: false
		, open: 'local' //local, external, ui, ui-external, tunnel or false
		, ghostMode: {
			clicks: true
			, forms: true
			, scroll: true
		}
		, online: true
		// , tunnel: 'public'
	});
});

