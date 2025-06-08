document.addEventListener("DOMContentLoaded", () => {
    const botonesComprar = document.querySelectorAll("button");

    // Crear modal dinámico
    function mostrarFormulario(nombreProducto, precioProducto) {
        const fondo = document.createElement("div");
        fondo.id = "modalGamer";
        fondo.style.position = "fixed";
        fondo.style.top = 0;
        fondo.style.left = 0;
        fondo.style.width = "100%";
        fondo.style.height = "100%";
        fondo.style.background = "rgba(0, 0, 0, 0.7)";
        fondo.style.display = "flex";
        fondo.style.justifyContent = "center";
        fondo.style.alignItems = "center";
        fondo.style.zIndex = 999;

        fondo.innerHTML = `
            <div style="background:#fff; padding:20px; border-radius:10px; width:300px">
                <h3>Comprar ${nombreProducto}</h3>
                <p><strong>Precio:</strong> ${precioProducto}</p>
                <form id="formCompraGamer">
                    <label>Nombre:<br><input type="text" id="nombreGamer" required></label><br><br>
                    <label>Email:<br><input type="email" id="emailGamer" required></label><br><br>
                    <label>Método de pago:<br>
                        <select id="pagoGamer" required>
                            <option value="">Selecciona...</option>
                            <option value="Tarjeta">Tarjeta</option>
                            <option value="Transferencia">Transferencia</option>
                            <option value="Efectivo">Efectivo</option>
                        </select>
                    </label><br><br>
                    <button type="submit">Confirmar</button>
                    <button type="button" onclick="document.getElementById('modalGamer').remove()">Cancelar</button>
                </form>
            </div>
        `;

        document.body.appendChild(fondo);

        document.getElementById("formCompraGamer").addEventListener("submit", function(e) {
            e.preventDefault();
            const nombre = document.getElementById("nombreGamer").value.trim();
            const email = document.getElementById("emailGamer").value.trim();
            const pago = document.getElementById("pagoGamer").value;

            if (!nombre || !email || !pago) {
                alert("Por favor completa todos los campos.");
                return;
            }

            alert(`✅ ¡Gracias ${nombre}!\nTu compra del producto "${nombreProducto}" por ${precioProducto} se ha registrado.\nPago por: ${pago}`);
            document.getElementById("modalGamer").remove();
        });
    }

    // Asociar botones
    botonesComprar.forEach(btn => {
        if (btn.textContent === "COMPRAR") {
            btn.addEventListener("click", () => {
                const contenedor = btn.closest("div");
                const nombre = contenedor.querySelector("p").textContent;
                const precio = contenedor.querySelector("p + p").textContent;
                mostrarFormulario(nombre, precio);
            });
        }
    });
});
