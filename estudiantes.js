/**
 * Función para agregar productos al carrito
 * @returns {void}
 */
function addToCart() {
    const producto = event.target.parentElement.querySelector('h3').textContent;
    alert(`Agregaste ${producto} al carrito`);
    // Aquí iría la lógica real del carrito
}