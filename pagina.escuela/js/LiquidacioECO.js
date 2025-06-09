// liquidacion-eco.js

// Al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const inputBuscar = document.querySelector('.busqueda input[type="text"]');
    const btnBuscar = document.querySelector('.busqueda button');
    const productos = document.querySelectorAll('.producto');

    btnBuscar.addEventListener('click', () => {
        const textoBusqueda = inputBuscar.value.toLowerCase().trim();

        productos.forEach(producto => {
            // Aquí suponemos que la descripción está en el <p> dentro de .detalle-producto
            const descripcion = producto.querySelector('.detalle-producto p').textContent.toLowerCase();

            if (descripcion.includes(textoBusqueda)) {
                producto.style.display = 'flex';
            } else {
                producto.style.display = 'none';
            }
        });
    });

    // Opcional: búsqueda en tiempo real
    inputBuscar.addEventListener('input', () => {
        const textoBusqueda = inputBuscar.value.toLowerCase().trim();

        productos.forEach(producto => {
            const descripcion = producto.querySelector('.detalle-producto p').textContent.toLowerCase();

            if (descripcion.includes(textoBusqueda)) {
                producto.style.display = 'flex';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});
