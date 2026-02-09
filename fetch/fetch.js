// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => response.json())
// .then(data => {
//     console.log('Fetching data...');
//     console.log(data);
// })

const url = "https://jsonplaceholder.typicode.com/posts/1";

async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetching data...');
    console.log(data);
    const body = document.querySelector('body');
    body.innerHTML = `<h1>${data.title}</h1><p>${data.body}</p>`;
}
getData();

