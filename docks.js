var ghpages = require('gh-pages');

ghpages.publish('docks', {
	dest: 'ascidok',
	repo: 'https://github.com/OleksandrPavlyshch/jekyll_test.git'
});