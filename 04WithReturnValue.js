const fetch = require('node-fetch');

async function showGitHubUser(handle){
	const url = `https://api.github.com/users/${handle}`;
	const res = await fetch(url);
	const user = await res.json();
	return user;
}

let res = showGitHubUser('cjordanball')

res.then((shit) => {
	console.log('res', shit);

})
