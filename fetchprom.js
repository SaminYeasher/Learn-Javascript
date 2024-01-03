// fetch("https://api.api-ninjas.com/v1/jokes?limit=50")
//             .then(response => console.log(response.json()))
//             .then(data => console.log(data));

 //console.log("hello World");

// using async and await effective way

 async function getJokes(){
    let response = await fetch("https://official-joke-api.appspot.com/random_joke")
    let data = await response.json();
    return data;
 }


 getJokes().then(jokes => console.log(jokes));