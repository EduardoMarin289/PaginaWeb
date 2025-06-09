document.addEventListener('DOMContentLoaded', () => {
  // Buscar
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
      // El producto está en la fila <tr>, y el nombre en la primera celda <td>
      const fila = boton.closest('tr');
      const nombreProducto = fila ? fila.querySelector('td').textContent : 'Producto desconocido';
      alert(`Has comprado: ${nombreProducto}`);
    });
  });

  // Crear formulario dinámico para interactuar
  const seccionForm = document.createElement('section');
  seccionForm.style.marginTop = '40px';
  seccionForm.style.padding = '10px';
  seccionForm.style.borderTop = '2px solid #333';

  seccionForm.innerHTML = `
    <h2>Formulario Interactivo</h2>

    <label for="nombreUsuario">Nombre:</label>
    <input type="text" id="nombreUsuario" placeholder="Tu nombre" />
    <br/><br/>

    <p>¿Qué buscas principalmente?</p>
    <label><input type="checkbox" name="preferencias" value="Laptops" /> Laptops</label>
    <label><input type="checkbox" name="preferencias" value="PC Escritorio" /> PC Escritorio</label>
    <label><input type="checkbox" name="preferencias" value="Accesorios" /> Accesorios</label>
    <br/><br/>

    <p>Tipo de usuario:</p>
    <label><input type="radio" name="tipoUsuario" value="Estudiante" /> Estudiante</label>
    <label><input type="radio" name="tipoUsuario" value="Profesor" /> Profesor</label>
    <label><input type="radio" name="tipoUsuario" value="Otro" /> Otro</label>
    <br/><br/>

    <label for="categoriaPreferida">Categoría preferida:</label>
    <select id="categoriaPreferida">
      <option value="">--Selecciona--</option>
      <option value="Laptops">Laptops</option>
      <option value="PC Escritorio">PC Escritorio</option>
      <option value="Accesorios">Accesorios</option>
    </select>
    <br/><br/>

    <button id="btnEnviarFormulario">Enviar</button>

    <p id="resultadoFormulario" style="font-weight: bold; margin-top: 20px;"></p>
  `;

  // Insertar el formulario justo después de la tabla
  const tabla = document.querySelector('table');
  if (tabla) {
    tabla.parentNode.insertBefore(seccionForm, tabla.nextSibling);
  } else {
    document.body.appendChild(seccionForm);
  }

  // Manejar evento enviar formulario
  const btnEnviar = seccionForm.querySelector('#btnEnviarFormulario');
  const resultado = seccionForm.querySelector('#resultadoFormulario');

  btnEnviar.addEventListener('click', () => {
    const nombre = seccionForm.querySelector('#nombreUsuario').value.trim() || 'No especificado';

    const preferencias = Array.from(seccionForm.querySelectorAll('input[name="preferencias"]:checked'))
      .map(chk => chk.value);

    const tipoUsuarioRadio = seccionForm.querySelector('input[name="tipoUsuario"]:checked');
    const tipoUsuario = tipoUsuarioRadio ? tipoUsuarioRadio.value : 'No seleccionado';

    const categoria = seccionForm.querySelector('#categoriaPreferida').value || 'No seleccionado';

    resultado.innerHTML = `
      Nombre: ${nombre} <br/>
      Preferencias: ${preferencias.length > 0 ? preferencias.join(', ') : 'No seleccionadas'} <br/>
      Tipo de usuario: ${tipoUsuario} <br/>
      Categoría preferida: ${categoria}
    `;
  });
});
