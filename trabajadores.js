/**
 * Función para cotización corporativa
 * @param {Event} event - Evento del formulario
 */
function handleCotizacion(event) {
    event.preventDefault();
    
    const equipos = document.getElementById('empleados').value;
    const empresa = document.getElementById('empresa').value;
    
    alert(`Solicitud recibida para ${empresa} (${equipos} equipos)`);
    // Lógica para enviar datos al servidor
}

// Asignar evento al formulario
document.querySelector('form').addEventListener('submit', handleCotizacion);