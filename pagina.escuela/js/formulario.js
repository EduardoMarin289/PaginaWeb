// Suponiendo que el resumen se arma dinámicamente (puedes integrarlo con carrito.js después)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario-compra");
    const resumenItems = document.getElementById("resumen-items");
    const resumenTotal = document.getElementById("resumen-total");

    // Ejemplo estático de producto seleccionado (podrías obtenerlo dinámico)
    const productosSeleccionados = [
        { nombre: "Laptop Estudiante X", precio: 7899.99 },
        { nombre: "Mouse Inalámbrico", precio: 499.50 }
    ];

    // Mostrar resumen
    let total = 0;
    resumenItems.innerHTML = "";
    productosSeleccionados.forEach(prod => {
        resumenItems.innerHTML += `<p>${prod.nombre}: $${prod.precio.toFixed(2)}</p>`;
        total += prod.precio;
    });
    resumenTotal.textContent = total.toFixed(2);

    // Validación del formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const ciudad = document.getElementById("ciudad").value.trim();
        const codigoPostal = document.getElementById("codigo-postal").value.trim();
        const metodoPago = document.getElementById("metodo-pago").value;

        if (!nombre || !email || !telefono || !direccion || !ciudad || !codigoPostal || !metodoPago) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        alert(`¡Gracias por tu compra, ${nombre}!\nSe enviará a: ${direccion}, ${ciudad}\nTotal: $${total.toFixed(2)}`);
        form.reset();
    });
});
