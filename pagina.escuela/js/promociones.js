document.addEventListener('DOMContentLoaded', () => {
  // Crear dinámicamente elementos para interacción
  const contenedor = document.createElement('div');
  contenedor.innerHTML = `
    <h2>Formulario de Usuario</h2>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" placeholder="Escribe tu nombre"><br><br>

    <label><input type="checkbox" id="suscripcion"> Suscribirse al boletín</label><br><br>

    <label>Género:</label>
    <label><input type="radio" name="genero" value="Masculino"> Masculino</label>
    <label><input type="radio" name="genero" value="Femenino"> Femenino</label>
    <label><input type="radio" name="genero" value="Otro"> Otro</label><br><br>

    <label for="color">Color favorito:</label>
    <select id="color">
      <option value="">-- Selecciona un color --</option>
      <option value="Rojo">Rojo</option>
      <option value="Azul">Azul</option>
      <option value="Verde">Verde</option>
    </select><br><br>

    <button id="mostrarDatos">Mostrar Datos</button>
    <div id="resultado" style="margin-top: 15px; border: 1px solid #ccc; padding: 10px;"></div>
  `;

  document.body.appendChild(contenedor);

  // Lógica del botón
  const btnMostrar = document.getElementById('mostrarDatos');
  const resultado = document.getElementById('resultado');

  btnMostrar.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const suscripcion = document.getElementById('suscripcion').checked;
    const generoElems = document.getElementsByName('genero');
    let generoSeleccionado = '';
    for (const g of generoElems) {
      if (g.checked) {
        generoSeleccionado = g.value;
        break;
      }
    }
    const color = document.getElementById('color').value;

    resultado.innerHTML = `
      <p><strong>Nombre:</strong> ${nombre || 'No especificado'}</p>
      <p><strong>Suscripción:</strong> ${suscripcion ? 'Sí' : 'No'}</p>
      <p><strong>Género:</strong> ${generoSeleccionado || 'No seleccionado'}</p>
      <p><strong>Color favorito:</strong> ${color || 'No seleccionado'}</p>
    `;
  });
});
