const body = document.querySelector("body");

// function changeBackgroundColor() {
//     const randomColor = '#' + Math.floor(Math.random()*12345678).toString(16);
//     body.style.backgroundColor = randomColor;
// }

// setInterval(changeBackgroundColor, 500);
// setTimeout(() => {
//     body.style.backgroundColor = 'red';
// }, 2000);
// setTimeout(() => {
//     body.style.backgroundColor = 'orange';
// }, 4000);

// setTimeout(() => {
//   body.style.backgroundColor = "yellow";
//   setTimeout(() => {
//     body.style.backgroundColor = "green";
//     setTimeout(() => {
//       body.style.backgroundColor = "blue";
//       setTimeout(() => {
//         body.style.backgroundColor = "indigo";
//         setTimeout(() => {
//           body.style.backgroundColor = "violet";
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// backgroundColor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// function changeColor(colors, index) {
//     if (index >= colors.length) {
//         console.log("All colors are displayed");
//         return 0;
//     }
//     setInterval(() => {
//         body.style.backgroundColor = colors[index];
//         changeColor(colors, index + 1);
//     }, 1000);
// }
// changeColor(backgroundColor, 0);
// body.style.backgroundColor = "violet";

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    body.style.backgroundColor = "red";
    resolve("Promise resolved");
  }, 2000);
});
p.then((data) => console.log(data));

function changeColorPromise(newColor, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
}

changeColorPromise('red',1000)
.then(() => changeColorPromise('orange',1000))
.then(()=>changeColorPromise('yellow'),1000)
.then(()=>changeColorPromise('green'),1000)
.then(()=>changeColorPromise('blue'),1000)
.then(()=>changeColorPromise('indigo'),1000)
.then(()=>changeColorPromise('violet'),1000)
.then(()=>console.log("All colors are displayed"));
