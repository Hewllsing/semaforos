const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}


/*
const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    }
    else {
        colorIndex = 0;
    }
}
*/

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; //Opção mais simples com ternário

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOn = {
    'red':       () => img.src = './img/red.png',
    'yellow':    () => img.src = './img/yellow.png',
    'green':     () => img.src = './img/green.png',
    'off':        () => img.src = './img/off.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);