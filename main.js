// Variables

let buttonIncrement = document.getElementById("increment-btn");
let buttonSave = document.getElementById("save-btn");
let ingresos = document.getElementById('ingresos-previos');

let display = document.getElementById('contador');

let count = 0;
let totalCount = 0;

// SUMAR
buttonIncrement.addEventListener('click', sumarUno);

function sumarUno() {
    count++;
    display.innerText = count;
    console.log('Suma +1')
}

// GUARDAR
buttonSave.addEventListener('click', save)

function save(){
    saveCount = count;
    totalCount += saveCount;

    let text = document.createTextNode(count + ' - ')
    ingresos.appendChild(text)

    display.innerText = count = 0;

    console.log('Save count')
}

// 

let name = 'Alan '
let greetig = 'hi super'

function superhi(){
    console.log(greetig + ' '+ name)
}

superhi()