// estudiantes.js

// Esperar a que cargue todo el contenido
document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidad del botón Buscar
  const inputBusqueda = document.querySelector('div input[type="text"]');
  const btnBuscar = inputBusqueda.nextElementSibling;

  btnBuscar.addEventListener('click', () => {
    const texto = inputBusqueda.value.trim();
    if (!texto) {
      alert('Por favor, ingresa un término para buscar.');
      return;
    }
    alert(`Buscando: "${texto}"`);
  });

  // Funcionalidad botones COMPRAR
  const botonesComprar = document.querySelectorAll('button');
  botonesComprar.forEach(btn => {
    if (btn.textContent.trim().toUpperCase() === 'COMPRAR') {
      btn.addEventListener('click', () => {
        const producto = btn.previousElementSibling ? btn.previousElementSibling.textContent : 'Producto';
        alert(`Has seleccionado comprar: ${producto}`);
      });
    }
  });
});
