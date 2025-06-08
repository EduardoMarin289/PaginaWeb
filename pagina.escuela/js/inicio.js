document.addEventListener("DOMContentLoaded", () => {
    // Animación simple al cargar
    const bienvenida = document.querySelector(".bienvenidaa .bienvenida-contenido");
    if (bienvenida) {
        bienvenida.style.opacity = 0;
        bienvenida.style.transition = "opacity 2s";
        setTimeout(() => {
            bienvenida.style.opacity = 1;
        }, 200);
    }

    // Efecto al pasar el mouse por el botón "Tester"
    const testerBtn = document.querySelector("a[href='./test1.html'] button");
    if (testerBtn) {
        testerBtn.addEventListener("mouseover", () => {
            testerBtn.style.transform = "scale(1.1)";
            testerBtn.style.transition = "transform 0.3s";
        });
        testerBtn.addEventListener("mouseout", () => {
            testerBtn.style.transform = "scale(1)";
        });
    }

    // Botón de "volver arriba"
    const volverBtn = document.createElement("button");
    volverBtn.textContent = "⬆ Volver arriba";
    volverBtn.style.position = "fixed";
    volverBtn.style.bottom = "20px";
    volverBtn.style.right = "20px";
    volverBtn.style.padding = "10px";
    volverBtn.style.borderRadius = "5px";
    volverBtn.style.display = "none";
    volverBtn.style.zIndex = "999";
    volverBtn.style.background = "#000";
    volverBtn.style.color = "#fff";
    volverBtn.style.cursor = "pointer";
    document.body.appendChild(volverBtn);

    volverBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener("scroll", () => {
        volverBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
});
