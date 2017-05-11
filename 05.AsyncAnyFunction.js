const fetch = require('node-fetch');

async function showGitHubUser(handle){
	return 5 + 3;
}

let res = showGitHubUser('cjordanball')

res.then((val) => {
	console.log(val + 12);
});
