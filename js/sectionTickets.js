console.log("Hi! it's my integrationwork of the program of \"Codo A Codo 4.0\".");

const buttonSuccess = document.querySelector("#buttonSuccess");
buttonSuccess.addEventListener("click", buttonSuccessF);
const buttonDelete = document.querySelector("#buttonDelete");
buttonDelete.addEventListener("click", buttonDeleteF)
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
};

function buttonDeleteF () {
    console.log("se eliminó todo pa'");
    inputNombre.innerHTML == "";
    inputApellido.value == "";
    inputEmail.value == "";
    inputCantidadTicket.value == 0;
    inputList.value == "Estudiante"; //REPARAR TODA ESTA FUNCIÓN!!
};