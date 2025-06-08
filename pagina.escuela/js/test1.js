
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío y recarga de página

    // Obtener valores
    const presupuesto = document.getElementById('presupuesto').value;
    
    // Velocidad seleccionada (radio)
    const velocidad = document.querySelector('input[name="velocidad"]:checked').value;

    // Tipo de computadora (select)
    const tipo = document.getElementById('tipo_computadora').value;

    // Gráficas seleccionadas (checkbox, pueden ser varias)
    const graficasSeleccionadas = Array.from(document.querySelectorAll('input[name="grafica"]:checked')).map(el => el.value);
    const graficasTexto = graficasSeleccionadas.length ? graficasSeleccionadas.join(', ') : '(ninguna)';

    // Almacenamiento (texto)
    const almacenamiento = this.almacenamiento.value;

    // Comentarios
    const comentarios = this.comentarios.value || '(sin comentarios)';

    // Mostrar resultados en un div (crear si no existe)
    let divResultado = document.getElementById('resultadoForm');
    if (!divResultado) {
      divResultado = document.createElement('div');
      divResultado.id = 'resultadoForm';
      divResultado.style.marginTop = '20px';
      divResultado.style.padding = '10px';
      divResultado.style.border = '1px solid #ccc';
      divResultado.style.backgroundColor = '#f9f9f9';
      this.parentNode.insertBefore(divResultado, this.nextSibling);
    }

    divResultado.innerHTML = `
      <h3>Resumen de tus respuestas:</h3>
      <p><strong>Presupuesto:</strong> $${presupuesto}</p>
      <p><strong>Importancia de velocidad:</strong> ${velocidad}</p>
      <p><strong>Tipo de computadora:</strong> ${tipo}</p>
      <p><strong>Importancia gráfica:</strong> ${graficasTexto}</p>
      <p><strong>Espacio de almacenamiento:</strong> ${almacenamiento}</p>
      <p><strong>Comentarios adicionales:</strong> ${comentarios}</p>
    `;
  });

