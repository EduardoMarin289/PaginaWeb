// Selecciona todos los botones "COMPRAR"
const botones = document.querySelectorAll("button");

// Creamos un formulario dinámico simple
function mostrarFormulario(producto) {
    const fondo = document.createElement("div");
    fondo.style.position = "fixed";
    fondo.style.top = 0;
    fondo.style.left = 0;
    fondo.style.width = "100%";
    fondo.style.height = "100%";
    fondo.style.backgroundColor = "rgba(0,0,0,0.6)";
    fondo.style.display = "flex";
    fondo.style.justifyContent = "center";
    fondo.style.alignItems = "center";
    fondo.id = "modalCompra";

    fondo.innerHTML = `
        <div style="background:white; padding:20px; border-radius:10px; width:300px">
            <h3>Formulario de Compra</h3>
            <form id="formularioCompra">
                <label>Nombre:<br><input type="text" id="nombre" required></label><br><br>
                <label>Email:<br><input type="email" id="email" required></label><br><br>
                <label>Método de Pago:<br>
                    <select id="pago" required>
                        <option value="">Seleccione...</option>
                        <option value="Tarjeta">Tarjeta</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Efectivo">Efectivo</option>
                    </select>
                </label><br><br>
                <input type="hidden" id="productoSeleccionado" value="${producto}">
                <button type="submit">Confirmar</button>
                <button type="button" onclick="document.getElementById('modalCompra').remove()">Cancelar</button>
            </form>
        </div>
    `;

    document.body.appendChild(fondo);

    document.getElementById("formularioCompra").addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const pago = document.getElementById("pago").value;
        const producto = document.getElementById("productoSeleccionado").value;

        if (!nombre || !email || !pago) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert(`Gracias por tu compra, ${nombre}.\nProducto: ${producto}\nCorreo: ${email}\nPago: ${pago}`);
        document.getElementById("modalCompra").remove();
    });
}

// Detecta cuál laptop se quiere comprar
botones.forEach(btn => {
    if (btn.textContent === "COMPRAR") {
        btn.addEventListener("click", () => {
            const producto = btn.parentElement.querySelector("p").innerText.split('\n')[0];
            mostrarFormulario(producto);
        });
    }
});
