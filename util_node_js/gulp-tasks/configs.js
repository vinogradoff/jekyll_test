let util = require('gulp-util')
	, rootPath = '../'
	, configs = {
		'site': '../_site'
		,'root': rootPath
		//images
		, 'img': rootPath + 'img/*.*'
		//icons
		, 'svgIcons': rootPath + 'svg-icons/'


		, errorHandler: require('./util/handle-errors')
};

module.exports = configs;