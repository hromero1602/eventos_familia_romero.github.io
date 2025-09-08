function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Manejo del formulario
document.getElementById('mensajeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const mensajeTexto = document.getElementById('mensajeTexto').value;
    const foto = document.getElementById('foto').files[0];

    const contenedorMensajes = document.getElementById('mensajesEnviados');

    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.className = 'mensaje';

    nuevoMensaje.innerHTML = `<strong>${nombre} dice:</strong><p>${mensajeTexto}</p>`;

    if (foto) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            nuevoMensaje.appendChild(img);
        }
        reader.readAsDataURL(foto);
    }

    contenedorMensajes.appendChild(nuevoMensaje);

    // Limpiar formulario
    document.getElementById('mensajeForm').reset();
});
