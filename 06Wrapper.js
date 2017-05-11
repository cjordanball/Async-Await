const fetch = require('node-fetch');

let myUser = {};

async function fetchGitHubUser(handle){
	const url = `https://api.github.com/users/${handle}`;
	const res = await fetch(url);
	return await res.json();
}

(async function() {
	const user = await fetchGitHubUser('cjordanball');
	myUser.name = user.name;
	myUser.location = user.location;
})();

setTimeout(() => {
	console.log('my', myUser);
}, 1000);
