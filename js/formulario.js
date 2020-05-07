const nombre = document.getElementById("name");
const apellido = document.getElementById("last_name");
const cedula = document.getElementById("cedulax");
const numero = document.getElementById("number");
const email = document.getElementById('email');
const register = document.getElementById("register");
const clean = document.getElementById("clean");
const sexo = document.getElementsByName("gender");
const form = document.getElementById("form");

register.addEventListener("click", e => {


    if (nombre.value.length < 2 || nombre.value.length > 25) {
        e.preventDefault()
        alert("Digite un Nombre válido")

    }
    if (apellido.value.length < 3 || apellido.value.length > 25) {
        e.preventDefault()
        alert("Digite un Apellido Válido")

    }


    if (cedula.value.length < 1) {
        e.preventDefault()
        alert("Digite una Cedula")
    }
    else if (isNaN(cedula.value)) {
        e.preventDefault()
        alert("Cedula no válida")

    }

    if (email.value.length < 5) {
        e.preventDefault()
        alert("Digite un email valido")
    }

    document.getElementById('email').addEventListener('input', function () {
        campo = event.target;
        valido = document.getElementById('emailOK');

        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(campo.value)) {
            valido.innerText = "válido";
        } else {
            valido.innerText = "incorrecto";
        }
    });

    if (!document.querySelector('input[name="gender"]:checked')) {
        e.preventDefault()
        alert('Error, rellena el campo sexo');
        hasError = true;
    }



});


form.addEventListener("submit", e => {
    alert("Registro Exitoso")
    limpiar();
})


clean.addEventListener("click", limpiar);

function limpiar() {
    nombre.value = " ";
    apellido.value = " ";
    cedula.value = " ";
    numero.value = " ";
    email.value = " ";
    nombre.value = " ";
    sexo.checked = false;
}