import { changeToFunkyColor, randomColor } from "./module/dom_functions.js";

const backgroundBody = document.querySelector('body');
const buttonElement = document.getElementById('change-button');
const buttonRandom = document.getElementById('random_button');

buttonElement.addEventListener('click', () => {
    changeToFunkyColor(backgroundBody);
});
buttonRandom.addEventListener('click', () => {
        randomColor(backgroundBody);
});