let postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1');
postPromise.then(response => console.log(response.status));
postPromise.then(Response => Response.json())
    .then(result => console.log(result));