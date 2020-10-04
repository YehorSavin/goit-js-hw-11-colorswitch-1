const color = ['#FFFFFF','#2196F3','#4CAF50','#FF9800','#009688','#795548',];
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let stoper;

const switchColor = () => {
     stoper = setInterval(() => {
          let arreyElement = randomIntegerFromInterval(0, color.length - 1); // color[2]
          body.style.backgroundColor = color[arreyElement];
     }, 300);
     start.disable = true;
}

const stopSwitch = () => {
     console.log('stopSwitch');
     clearInterval(stoper);
     start.disable = false;
}

start.addEventListener("click", switchColor);

stop.addEventListener("click", stopSwitch);

const randomIntegerFromInterval = (min, max) => {
     return Math.floor(Math.random() * (max - min + 1) + min);
}

//==================================================================================================
// function createColor() {
//      let num1 = Math.floor(Math.random() * 255);
//      let num2 = Math.floor(Math.random() * 255);
//      let num3 = Math.floor(Math.random() * 255);
//      return `rgb(${num1},${num2},${num3})`;
//    }
//    let colors = createColor();
//    const start = document.querySelector('[data-action="start"]');
//    const stop = document.querySelector('[data-action="stop"]');
//    const body = document.querySelector("body");
//    let stoper;
//    const switchColor = () => {
//      stoper = setInterval(() => {
//        let arrayElement = createColor();
//        body.style.backgroundColor = arrayElement;
//      }, 300);
//      start.disabled = true;
//    };
//    const stopSwitch = () => {
//      console.log("stopSwitch");
//      clearInterval(stoper);
//      start.disabled = false;
//    };
//    start.addEventListener("click", switchColor);
//    stop.addEventListener("click", stopSwitch);