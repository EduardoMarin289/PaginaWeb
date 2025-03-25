// Función para añadir al carrito
function addToCart(modelo) {
    const precio = document.querySelector(`[aria-label="Añadir Laptop ${modelo} al carrito"]`)
                   .parentElement.querySelector('.precio strong').innerText;
    
    alert(`✅ Añadido: ${modelo}\nPrecio: ${precio}\n\nSerás redirigido al carrito`);
    // Lógica adicional para manejar el carrito
}

// Validación de formulario
document.getElementById('contacto-economicas').addEventListener('submit', function(e) {
    e.preventDefault();
    const telefono = document.getElementById('telefono').value;
    
    if (!/^\d{10}$/.test(telefono)) {
        alert('⚠️ El teléfono debe tener 10 dígitos');
        return;
    }
    
    this.submit();
});