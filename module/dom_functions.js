const changeToFunkyColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    
    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
    domElement.style.transition = "background .5s";
}

// const cleanToColor = () => {
//     clearInterval(randomColor);
// }

const randomColor = (domElement) => {
    setInterval(() => {
        changeToFunkyColor(domElement)
    }, 500);
}

export { changeToFunkyColor, randomColor };