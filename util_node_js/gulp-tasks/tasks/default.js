const gulp = require('gulp')
	, configs = require('../configs')
	, runSequence = require('run-sequence');

gulp.task('default', () => {
	runSequence(/*'server', */'sprite:svg');
});
