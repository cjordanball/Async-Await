const fetch = require('node-fetch');

let myUser = {};

async function fetchGitHubUser(handle){
	const url = `https://api.github.com/users/${handle}`;
	const res = await fetch(url);
	const body = await res.json();

	if (res.status !== 200) {
		throw Error(body.message);
	}

	return body;
}

fetchGitHubUser('nowheremanmemdurfle')
	.then(user => {
		console.log('user', user)
	}).
	catch(err => {
		console.error(`Error: ${err.message}`);
	});
