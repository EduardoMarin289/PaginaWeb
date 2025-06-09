// Capturamos el área por su id
const area1 = document.getElementById('area1');

// Agregamos un evento click para que no navegue automáticamente, sino que muestre un mensaje
area1.addEventListener('click', function(event) {
    event.preventDefault(); // Previene que siga el enlace
    alert('¡Haz clickeado en el área 1 del mapa!');
    // Aquí puedes poner cualquier acción JS que quieras ejecutar
});
