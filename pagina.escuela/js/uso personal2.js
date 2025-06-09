
document.addEventListener("DOMContentLoaded", function () {
    const productos = document.querySelectorAll("main article");
    const buscador = document.querySelector('input[type="search"]');
    const btnBuscar = document.querySelector('form button[type="submit"]');

    // Buscar productos
    btnBuscar.addEventListener("click", function (e) {
        e.preventDefault();
        const texto = buscador.value.toLowerCase().trim();

        let encontrados = 0;

        productos.forEach(producto => {
            const titulo = producto.querySelector("h2").textContent.toLowerCase();
            if (titulo.includes(texto)) {
                producto.style.display = "block";
                encontrados++;
            } else {
                producto.style.display = "none";
            }
        });

        if (texto === "") {
            productos.forEach(p => p.style.display = "block");
            alert("Mostrando todos los productos.");
        } else if (encontrados === 0) {
            alert("No se encontraron productos con ese nombre.");
        } else {
            alert(`Se encontraron ${encontrados} productos.`);
        }
    });

    // Botones de "Agregar al carrito"
    productos.forEach(producto => {
        const btnCarrito = producto.querySelector("form button[type='submit']");
        const nombreProducto = producto.querySelector("h2").textContent;

        btnCarrito.addEventListener("click", function (e) {
            e.preventDefault();
            alert(`🛒 "${nombreProducto}" ha sido agregado al carrito.`);
        });
    });

    // Envío de comentarios
    const formulariosComentario = document.querySelectorAll("details form");

    formulariosComentario.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const textarea = form.querySelector("textarea");
            const comentario = textarea.value.trim();

            if (comentario === "") {
                alert("⚠️ Por favor escribe un comentario antes de enviar.");
                return;
            }

            alert("✅ ¡Comentario enviado correctamente!");
            textarea.value = ""; // Limpia el campo
        });
    });
});

