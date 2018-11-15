var ghpages = require('gh-pages');

ghpages.publish('docks', {
	dest: 'ascidok',
	repo: 'https://github.com/vinogradoff/selenide_new.git'
});