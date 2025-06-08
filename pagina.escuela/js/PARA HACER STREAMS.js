document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll("button");

    function mostrarFormulario(nombreProducto, precioProducto) {
        const modal = document.createElement("div");
        modal.id = "modalStream";
        modal.style.position = "fixed";
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = 999;

        modal.innerHTML = `
            <div style="background:#fff; padding:20px; border-radius:10px; width:300px">
                <h3>Comprar ${nombreProducto}</h3>
                <p><strong>${precioProducto}</strong></p>
                <form id="formStream">
                    <label>Nombre:<br><input type="text" id="nombreStream" required></label><br><br>
                    <label>Email:<br><input type="email" id="emailStream" required></label><br><br>
                    <label>Método de pago:<br>
                        <select id="pagoStream" required>
                            <option value="">Selecciona...</option>
                            <option value="Tarjeta">Tarjeta</option>
                            <option value="Transferencia">Transferencia</option>
                            <option value="Efectivo">Efectivo</option>
                        </select>
                    </label><br><br>
                    <button type="submit">Confirmar</button>
                    <button type="button" onclick="document.getElementById('modalStream').remove()">Cancelar</button>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById("formStream").addEventListener("submit", function (e) {
            e.preventDefault();
            const nombre = document.getElementById("nombreStream").value.trim();
            const email = document.getElementById("emailStream").value.trim();
            const pago = document.getElementById("pagoStream").value;

            if (!nombre || !email || !pago) {
                alert("Por favor completa todos los campos.");
                return;
            }

            alert(`✅ Gracias, ${nombre}.\nProducto: ${nombreProducto}\nPrecio: ${precioProducto}\nPago: ${pago}`);
            document.getElementById("modalStream").remove();
        });
    }

    // Asocia el comportamiento a los botones "COMPRAR"
    botones.forEach(btn => {
        if (btn.textContent === "COMPRAR") {
            btn.addEventListener("click", () => {
                const contenedor = btn.closest("div");
                const nombre = contenedor.querySelector("p").textContent;
                const precio = contenedor.querySelector("p + p strong").textContent;
                mostrarFormulario(nombre, precio);
            });
        }
    });
});
