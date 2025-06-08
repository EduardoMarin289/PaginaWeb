document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.createElement('div');
  formulario.innerHTML = `
    <h2>Formulario Económico</h2>

    <label for="correo">Correo electrónico:</label>
    <input type="email" id="correo" placeholder="usuario@correo.com"><br><br>

    <label><input type="checkbox" id="recibirOfertas"> Deseo recibir ofertas</label><br><br>

    <label>Tipo de usuario:</label>
    <label><input type="radio" name="tipo" value="Estudiante"> Estudiante</label>
    <label><input type="radio" name="tipo" value="Trabajador"> Trabajador</label>
    <label><input type="radio" name="tipo" value="Otro"> Otro</label><br><br>

    <label for="interes">Interés principal:</label>
    <select id="interes">
      <option value="">-- Selecciona una opción --</option>
      <option value="Laptop">Laptop</option>
      <option value="Accesorios">Accesorios</option>
      <option value="Software">Software</option>
    </select><br><br>

    <button id="enviarDatos">Enviar Datos</button>
    <div id="salida" style="margin-top: 15px; border: 1px solid #ccc; padding: 10px;"></div>
  `;

  document.body.appendChild(formulario);

  // Lógica
  const boton = document.getElementById('enviarDatos');
  const salida = document.getElementById('salida');

  boton.addEventListener('click', () => {
    const correo = document.getElementById('correo').value;
    const ofertas = document.getElementById('recibirOfertas').checked;
    const tipoElems = document.getElementsByName('tipo');
    let tipoSeleccionado = '';
    for (const elem of tipoElems) {
      if (elem.checked) {
        tipoSeleccionado = elem.value;
        break;
      }
    }
    const interes = document.getElementById('interes').value;

    salida.innerHTML = `
      <p><strong>Correo:</strong> ${correo || 'No proporcionado'}</p>
      <p><strong>Ofertas:</strong> ${ofertas ? 'Sí' : 'No'}</p>
      <p><strong>Tipo de usuario:</strong> ${tipoSeleccionado || 'No seleccionado'}</p>
      <p><strong>Interés:</strong> ${interes || 'No seleccionado'}</p>
    `;
  });
});
