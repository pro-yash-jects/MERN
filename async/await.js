const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data is available!');
  }, 1000);
});

async function getData(){
    const data = await p;
    console.log('Fetching data...');
    console.log(data);
}
getData();