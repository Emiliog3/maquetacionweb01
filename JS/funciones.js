// Mensaje de bienvenida en la consola
console.log("Bienvenido a la hoja de vida de Pablo Emilio Gómez Gómez");

// Validación de formulario simple
document.querySelector('form').addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    if (nombre === "" || email === "") {
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
        event.preventDefault();
    }
});
