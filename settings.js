let searchItems = [
	'Seattle',
	'Amazon',
	'Microsoft',
	'Google',
	'SnapChat',

	...process.argv.slice(2)
];

let settings = {
	home : 'http://google.com/',
	items : searchItems
};

module.exports = settings;