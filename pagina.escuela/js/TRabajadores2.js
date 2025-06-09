
document.addEventListener("DOMContentLoaded", function () {
    // --- Referencias clave ---
    const inputBuscar = document.querySelector('input[type="text"]');
    const botonBuscar = document.querySelector('button');
    const tarjetas = document.querySelectorAll('.producto-destacado');

    // --- Búsqueda visual + alerta ---
    botonBuscar.addEventListener("click", function () {
        const texto = inputBuscar.value.trim().toLowerCase();

        if (texto === "") {
            alert("Por favor, escribe algo para buscar.");
            return;
        }

        let encontrado = false;

        tarjetas.forEach(card => {
            const nombre = card.querySelector("p").textContent.toLowerCase();
            if (nombre.includes(texto)) {
                card.style.display = "inline-block";
                encontrado = true;
            } else {
                card.style.display = "none";
            }
        });

        if (!encontrado) {
            alert(`No se encontraron resultados para: "${texto}"`);
        } else {
            alert(`Mostrando resultados relacionados con: "${texto}"`);
        }
    });

    // --- Animación suave al cargar productos ---
    tarjetas.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease";
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 200 * index);
    });

    // --- Evento de compra con nombre del producto ---
    tarjetas.forEach(card => {
        const boton = card.querySelector("button");
        const nombre = card.querySelector("p").textContent;
        boton.addEventListener("click", () => {
            alert(`🛒 Has agregado "${nombre}" al carrito.`);
        });
    });
});

