
  // Mostrar mensajes dinámicos
  function mostrarMensaje(tipo, texto) {
    const mensaje = document.createElement("div");
    mensaje.textContent = texto;
    mensaje.style.position = "fixed";
    mensaje.style.top = "20px";
    mensaje.style.right = "20px";
    mensaje.style.padding = "12px 20px";
    mensaje.style.borderRadius = "10px";
    mensaje.style.zIndex = 9999;
    mensaje.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    mensaje.style.transition = "opacity 0.5s ease";
    mensaje.style.opacity = "1";

    if (tipo === "error") {
      mensaje.style.backgroundColor = "#f44336";
      mensaje.style.color = "#fff";
    } else {
      mensaje.style.backgroundColor = "#4caf50";
      mensaje.style.color = "#fff";
    }

    document.body.appendChild(mensaje);

    setTimeout(() => {
      mensaje.style.opacity = "0";
      setTimeout(() => document.body.removeChild(mensaje), 500);
    }, 3000);
  }

  // Validar formulario dinámicamente
  function validarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const comentario = document.getElementById("comentario").value.trim();
    const modelo = document.getElementById("modelo").value;

    if (!nombre || !correo || !comentario || !modelo) {
      mostrarMensaje("error", "Por favor, completa todos los campos.");
      return;
    }

    if (!correo.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      mostrarMensaje("error", "Correo electrónico inválido.");
      return;
    }

    mostrarMensaje("success", "Formulario enviado correctamente. ¡Gracias!");
    document.getElementById("formContacto").reset();
  }

  // Mostrar info del mapa con animación
  function mostrarInfoComputadora(nombre) {
    const contenedor = document.createElement("div");
    contenedor.textContent = "Seleccionaste: " + nombre;
    contenedor.style.position = "absolute";
    contenedor.style.bottom = "30px";
    contenedor.style.left = "30px";
    contenedor.style.background = "#2196f3";
    contenedor.style.color = "#fff";
    contenedor.style.padding = "10px 15px";
    contenedor.style.borderRadius = "8px";
    contenedor.style.boxShadow = "0 3px 6px rgba(0,0,0,0.3)";
    contenedor.style.opacity = "0";
    contenedor.style.transition = "opacity 0.6s ease-in-out";
    contenedor.style.zIndex = 1000;

    document.body.appendChild(contenedor);

    setTimeout(() => {
      contenedor.style.opacity = "1";
    }, 100);

    setTimeout(() => {
      contenedor.style.opacity = "0";
      setTimeout(() => document.body.removeChild(contenedor), 600);
    }, 2500);
  }

  // Validación en tiempo real
  function validarCampo(event) {
    const campo = event.target;
    if (campo.value.trim() === "") {
      campo.style.borderColor = "red";
    } else {
      campo.style.borderColor = "green";
    }
  }

  // Asignar eventos al cargar
  window.onload = function () {
    document.getElementById("formContacto").addEventListener("submit", validarFormulario);

    document.querySelectorAll("input, textarea, select").forEach(campo => {
      campo.addEventListener("blur", validarCampo);
    });

    document.querySelectorAll("area[data-nombre]").forEach(area => {
      area.addEventListener("click", function (e) {
        e.preventDefault(); // evitar redirección
        mostrarInfoComputadora(this.dataset.nombre);
      });
    });
  };