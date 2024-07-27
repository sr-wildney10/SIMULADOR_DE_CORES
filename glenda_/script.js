const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const colorDisplay = document.getElementById('colorDisplay');

function updateColor() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;
    
    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Adiciona eventos para atualizar a cor quando os sliders mudam
redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);
