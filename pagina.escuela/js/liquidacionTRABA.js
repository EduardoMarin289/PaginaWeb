// Esperamos que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  // 1. Funcionalidad Buscar
  const inputBuscar = document.querySelector('input[type="text"][placeholder="Buscar..."]');
  const btnBuscar = inputBuscar.nextElementSibling;

  btnBuscar.addEventListener('click', () => {
    alert(`Buscando: "${inputBuscar.value.trim() || 'Nada ingresado'}"`);
  });

  // 2. Agregar formulario dinámico con los controles que pediste
  const contenedor = document.createElement('section');
  contenedor.style.marginTop = '40px';

  contenedor.innerHTML = `
    <h2>Formulario de Ejemplo con JavaScript</h2>

    <label for="nombreUsuario">Nombre:</label>
    <input type="text" id="nombreUsuario" placeholder="Tu nombre aquí" />
    <br/><br/>

    <p>Selecciona tus intereses:</p>
    <label><input type="checkbox" name="intereses" value="Tecnología" /> Tecnología</label>
    <label><input type="checkbox" name="intereses" value="Gaming" /> Gaming</label>
    <label><input type="checkbox" name="intereses" value="Programación" /> Programación</label>
    <br/>

    <p>Selecciona tu tipo de usuario:</p>
    <label><input type="radio" name="tipoUsuario" value="Cliente" /> Cliente</label>
    <label><input type="radio" name="tipoUsuario" value="Trabajador" /> Trabajador</label>
    <label><input type="radio" name="tipoUsuario" value="Administrador" /> Administrador</label>
    <br/><br/>

    <label for="seleccionColor">Elige un color favorito:</label>
    <select id="seleccionColor">
      <option value="">--Selecciona--</option>
      <option value="Rojo">Rojo</option>
      <option value="Verde">Verde</option>
      <option value="Azul">Azul</option>
    </select>
    <br/><br/>

    <button id="btnEnviarFormulario">Enviar Formulario</button>

    <p id="resultadoFormulario" style="margin-top: 20px; font-weight: bold;"></p>
  `;

  // Insertamos después del último producto (puedes cambiar donde quieres ponerlo)
  const divProductos = document.querySelector('body > div[style*="display: flex"]') || document.body;
  divProductos.insertAdjacentElement('afterend', contenedor);

  // 3. Evento para enviar formulario
  const btnEnviar = contenedor.querySelector('#btnEnviarFormulario');
  const resultado = contenedor.querySelector('#resultadoFormulario');

  btnEnviar.addEventListener('click', () => {
    const nombre = contenedor.querySelector('#nombreUsuario').value.trim() || 'No especificado';

    const intereses = Array.from(contenedor.querySelectorAll('input[name="intereses"]:checked'))
      .map(chk => chk.value);

    const tipoUsuarioRadio = contenedor.querySelector('input[name="tipoUsuario"]:checked');
    const tipoUsuario = tipoUsuarioRadio ? tipoUsuarioRadio.value : 'No seleccionado';

    const color = contenedor.querySelector('#seleccionColor').value || 'No seleccionado';

    resultado.innerHTML = `
      Nombre: ${nombre} <br/>
      Intereses: ${intereses.length > 0 ? intereses.join(', ') : 'No seleccionados'} <br/>
      Tipo de Usuario: ${tipoUsuario} <br/>
      Color Favorito: ${color}
    `;
  });

  // 4. Evento para botones "COMPRAR"
  const botonesComprar = document.querySelectorAll('button');

  botonesComprar.forEach(boton => {
    if (boton.textContent.trim() === 'COMPRAR') {
      boton.addEventListener('click', () => {
        // Obtenemos el nombre del producto basado en el texto del párrafo previo o la imagen alt
        const divProducto = boton.closest('div[style*="display: flex"]');
        const imgProducto = divProducto ? divProducto.querySelector('img') : null;
        const nombreProducto = imgProducto ? imgProducto.alt || 'Producto' : 'Producto';

        alert(`Has comprado: ${nombreProducto}`);
      });
    }
  });

});
