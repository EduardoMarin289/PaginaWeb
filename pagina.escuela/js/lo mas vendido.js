document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll("button");

    function mostrarFormulario(nombreProducto) {
        const modal = document.createElement("div");
        modal.id = "modalMasVendido";
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
                <form id="formMasVendido">
                    <label>Nombre:<br><input type="text" id="nombreMas" required></label><br><br>
                    <label>Email:<br><input type="email" id="emailMas" required></label><br><br>
                    <label>Método de pago:<br>
                        <select id="pagoMas" required>
                            <option value="">Selecciona...</option>
                            <option value="Tarjeta">Tarjeta</option>
                            <option value="Transferencia">Transferencia</option>
                            <option value="Efectivo">Efectivo</option>
                        </select>
                    </label><br><br>
                    <button type="submit">Confirmar</button>
                    <button type="button" onclick="document.getElementById('modalMasVendido').remove()">Cancelar</button>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById("formMasVendido").addEventListener("submit", function (e) {
            e.preventDefault();
            const nombre = document.getElementById("nombreMas").value.trim();
            const email = document.getElementById("emailMas").value.trim();
            const pago = document.getElementById("pagoMas").value;

            if (!nombre || !email || !pago) {
                alert("Por favor completa todos los campos.");
                return;
            }

            alert(`✅ Gracias, ${nombre}.\nProducto: ${nombreProducto}\nPago: ${pago}`);
            document.getElementById("modalMasVendido").remove();
        });
    }

    // Activar solo en botones que digan "COMPRAR"
    botones.forEach(btn => {
        if (btn.textContent === "COMPRAR") {
            btn.addEventListener("click", () => {
                const producto = btn.closest("div").querySelector("p").textContent;
                mostrarFormulario(producto);
            });
        }
    });
});
