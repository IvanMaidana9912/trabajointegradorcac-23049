console.log("Hi! it's my integrationwork of the program of \"Codo A Codo 4.0\".");

const buttonSuccess = document.querySelector("#buttonSuccess");
buttonSuccess.addEventListener("click", buttonSuccessF);
const categoria1 = document.querySelector("#categoria1");
categoria1.addEventListener("click", fCategoria1);
const categoria2 = document.querySelector("#categoria2");
categoria2.addEventListener("click", fCategoria2);
const categoria3 = document.querySelector("#categoria3");
categoria3.addEventListener("click", fCategoria3);
const inputNombre = document.querySelector("#inputNombre");
const inputApellido = document.querySelector("#inputApellido");
const inputEmail = document.querySelector("#inputEmail");
const inputCantidadTicket = document.querySelector("#inputCantidadTicket");
const inputList = document.querySelector("#inputList");
const totalAPagar = document.querySelector("#totalAPagar");

const DescuentoEstudiante = 0.8;
const DescuentoTrainee = 0.5;
const DescuentoJunior = 0.15;
const valorTicket = 200;

function buttonSuccessF () {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let email = inputEmail.value;
    let tickets = inputCantidadTicket.value;
    let list = inputList.value;
    console.log(`${nombre}, ${apellido}, ${email}, ${tickets}, valor: ${list}`);
    let valorConDescuento;
    if (inputList.value == "Estudiante") {
        valorConDescuento = valorTicket * DescuentoEstudiante * inputCantidadTicket.value;
        totalAPagar.innerHTML = valorConDescuento;
    }else if (inputList.value == "Trainee"){
        valorConDescuento = valorTicket * DescuentoTrainee * inputCantidadTicket.value;
        totalAPagar.innerHTML = valorConDescuento;
    }else if (inputList.value == "Junior"){
        valorConDescuento = valorTicket * DescuentoJunior * inputCantidadTicket.value;
        totalAPagar.innerHTML = valorConDescuento;
    }else {
        alert("ERROR")
    }
};

function fCategoria1 () {
    console.log("este es categoria Estudiante");
    inputList.value == "Estudiante";
};

function fCategoria2 () {
    console.log("este es categoria Trainee");
    inputList.value == "Trainee";
};

function fCategoria3 () {
    console.log("este es categoria Junior");
    inputList.value == "Junior";
};