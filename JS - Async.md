# Async - Await

1. First, examine the following basic sample case, where we get a name and location of a Github user:
    ```javascript
    const fetch = require('node-fetch');

    function showGitHubUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        fetch(url)
            .then(response => response.json())
            .then(user => {
                console.log('user', user.name);
                console.log('user', user.location);
        });
    }

    showGitHubUser('cjordanball');
    ```
    The code above uses an npm library, *fetch* to go make a simple GET request, which returns a promise. This is then converted to json in the first *then* statement. The *json* method also returns a promise, which, upon fulfillment, sends the name and location to the console.

2. To get our feet wet, examine the following code, which uses the **async** and **await** keywords to obtain the same result:
    ```javascript
    const fetch = require('node-fetch');

    async function showGitHubUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        const res = await fetch(url);
        const user = await res.json();
        console.log('user', user.name);
        console.log('user', user.location);
    }

    showGitHubUser('cjordanball');
    ```
    
3. This will also work with an arrow function:
    ```javascript
    const fetch = require('node-fetch');

    const showGitHubUser = async (handle) => {
        const url = `https://api.github.com/users/${handle}`;
        const res = await fetch(url);
        const user = await res.json();
        console.log('user', user.name);
        console.log('user', user.location);
    }

    showGitHubUser('cjordanball');
    ```
    
4. ES2017 has implemented a new function keyword, **async**, which causes a function to return a promise.

5. An *async function* can contain an **await** expression, which pauses execution of the *async* function until a promise is settled. Note that the *await* keyword can be used **only** in an *async* function. 

6. When an async function is called, it returns a **promise**. When the promise is settled, so we can use **.then()** to do something with the result.

7. **Async** makes any function asynchronous, including object methods, so that it returns a promise, even the following:
    ```javascript
    const fetch = require('node-fetch');

    async function showGitHubUser(handle){
        return 5 + 3;
    }

    let res = showGitHubUser('cjordanball')

    res.then((val) => {
        console.log(val + 12);
    });
    ```
8. As noted, the *await* keyword can only be used in async functions. So, the following code will not work.
    ```javascript
    const fetch = require('node-fetch');

    async function fetchGitHubUser(handle){
        const url = `https://api.github.com/users${handle}`;
        const res = await fetch(url);
        return await res.json();
    }

    const user = await fetchGitHubUser('cjordanball');
    console.log(user.name);
    console.log(user.location);
    ```
    
9. An asynchronous function will always return a rejected promise, whenever an error is thrown. 