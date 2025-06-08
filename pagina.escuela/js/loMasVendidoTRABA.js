document.addEventListener('DOMContentLoaded', () => {
  // Referencias a elementos
  const inputBuscar = document.querySelector('input[type="text"][placeholder="Buscar..."]');
  const btnBuscar = inputBuscar.nextElementSibling;

  btnBuscar.addEventListener('click', () => {
    const texto = inputBuscar.value.trim();
    alert(`Buscando: "${texto || 'Nada ingresado'}"`);
  });

  // Botones COMPRAR
  const botonesComprar = Array.from(document.querySelectorAll('button')).filter(btn => btn.textContent.trim() === 'COMPRAR');

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
      const fila = boton.closest('tr');

      // Obtener el nombre o descripción del producto (aquí con dt y dd)
      const caracteristicas = fila.querySelectorAll('dt, dd');
      let descripcion = '';
      for(let i=0; i<caracteristicas.length; i+=2) {
        descripcion += `${caracteristicas[i].textContent} ${caracteristicas[i+1].textContent}, `;
      }
      descripcion = descripcion.slice(0, -2); // quitar última coma y espacio

      // Comprobar si la imagen tiene src válido
      const img = fila.querySelector('td img');
      let imgMsg = '';
      if (!img || !img.src.trim()) {
        imgMsg = ' (imagen no disponible)';
      }

      alert(`Has comprado un producto con características: ${descripcion}${imgMsg}`);
    });
  });
});
