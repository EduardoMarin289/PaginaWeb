document.addEventListener("DOMContentLoaded", () => {
    const botonesComprar = document.querySelectorAll(".producto button");

    function mostrarFormulario(nombreProducto, precioProducto) {
        const modal = document.createElement("div");
        modal.id = "modalRecomendado";
        modal.style.position = "fixed";
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0, 0, 0, 0.7)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "999";

        modal.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 10px; width: 300px">
                <h3>Comprar ${nombreProducto}</h3>
                <p><strong>${precioProducto}</strong></p>
                <form id="formRecomendado">
                    <label>Nombre:<br><input type="text" id="nombreRecom" required></label><br><br>
                    <label>Email:<br><input type="email" id="emailRecom" required></label><br><br>
                    <label>Método de pago:<br>
                        <select id="pagoRecom" required>
                            <option value="">Selecciona...</option>
                            <option value="Tarjeta">Tarjeta</option>
                            <option value="Transferencia">Transferencia</option>
                            <option value="Efectivo">Efectivo</option>
                        </select>
                    </label><br><br>
                    <button type="submit">Confirmar</button>
                    <button type="button" onclick="document.getElementById('modalRecomendado').remove()">Cancelar</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById("formRecomendado").addEventListener("submit", function(e) {
            e.preventDefault();
            const nombre = document.getElementById("nombreRecom").value.trim();
            const email = document.getElementById("emailRecom").value.trim();
            const pago = document.getElementById("pagoRecom").value;

            if (!nombre || !email || !pago) {
                alert("Por favor completa todos los campos.");
                return;
            }

            alert(`✅ ¡Gracias, ${nombre}!\nProducto: ${nombreProducto}\nPrecio: ${precioProducto}\nPago: ${pago}`);
            document.getElementById("modalRecomendado").remove();
        });
    }

    botonesComprar.forEach(btn => {
        // Excluir el botón "Regresar"
        if (btn.textContent === "COMPRAR") {
            btn.addEventListener("click", () => {
                const producto = btn.closest(".producto");
                const nombre = producto.querySelectorAll("p")[0].textContent;
                const precio = producto.querySelectorAll("p")[1].textContent;
                mostrarFormulario(nombre, precio);
            });
        }
    });
});
