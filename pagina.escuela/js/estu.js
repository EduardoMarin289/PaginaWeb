// Selecciona todos los botones con clase 'comprarBtn'
const botones = document.querySelectorAll(".comprarBtn");
const modal = document.getElementById("formularioCompra");
const productoInput = document.getElementById("productoSeleccionado");

// Al hacer clic en cualquier botón de comprar, abrir el formulario con el producto seleccionado
botones.forEach(btn => {
    btn.addEventListener("click", e => {
        const producto = e.target.closest(".producto").getAttribute("data-nombre");
        productoInput.value = producto;
        modal.style.display = "flex";
    });
});

// Cierra el formulario y limpia campos
function cerrarFormulario() {
    modal.style.display = "none";
    document.getElementById("form").reset();
}

// Validación y envío del formulario
document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pago = document.getElementById("pago").value;
    const producto = productoInput.value;

    if (!nombre || !email || !pago) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    alert(`Gracias por tu compra, ${nombre}.\nProducto: ${producto}\nCorreo: ${email}\nPago: ${pago}`);
    cerrarFormulario();
});
