const fetch = require('node-fetch');

async function showGitHubUser(handle) {
	const url = `https://api.github.com/users/${handle}`;
	const res = await fetch(url);
	const user = await res.json();
	console.log('user', user.name);
	console.log('user', user.location);
}

showGitHubUser('cjordanball');
