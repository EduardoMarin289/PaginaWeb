document.addEventListener('DOMContentLoaded', () => {
  // 1. Funcionalidad Buscar
  const inputBuscar = document.querySelector('input[type="text"][placeholder="Buscar..."]');
  const btnBuscar = inputBuscar.nextElementSibling;

  btnBuscar.addEventListener('click', () => {
    alert(`Buscando: "${inputBuscar.value.trim() || 'Nada ingresado'}"`);
  });

  // 2. Evento para botones "COMPRAR" en la tabla
  const botonesComprar = document.querySelectorAll('table button');

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
      // Buscamos la fila del botón
      const fila = boton.closest('tr');
      // Obtenemos el alt de la imagen en la fila
      const img = fila.querySelector('img');
      const nombreProducto = img ? img.alt : 'Producto desconocido';

      alert(`Has comprado: ${nombreProducto}`);
    });
  });

  // 3. Crear formulario dinámico con etiquetas, checkbox, radio, select
  const contenedor = document.createElement('section');
  contenedor.style.marginTop = '40px';
  contenedor.style.padding = '10px';
  contenedor.style.borderTop = '2px solid #333';

  contenedor.innerHTML = `
    <h2>Formulario Interactivo</h2>

    <label for="nombreUser">Nombre:</label>
    <input type="text" id="nombreUser" placeholder="Tu nombre" />
    <br/><br/>

    <p>Selecciona tus intereses:</p>
    <label><input type="checkbox" name="intereses" value="Ofertas" /> Ofertas</label>
    <label><input type="checkbox" name="intereses" value="Novedades" /> Novedades</label>
    <label><input type="checkbox" name="intereses" value="Rebajas" /> Rebajas</label>
    <br/><br/>

    <p>Tipo de cliente:</p>
    <label><input type="radio" name="tipoCliente" value="Regular" /> Regular</label>
    <label><input type="radio" name="tipoCliente" value="Premium" /> Premium</label>
    <label><input type="radio" name="tipoCliente" value="VIP" /> VIP</label>
    <br/><br/>

    <label for="colorFav">Color favorito:</label>
    <select id="colorFav">
      <option value="">--Selecciona--</option>
      <option value="Negro">Negro</option>
      <option value="Blanco">Blanco</option>
      <option value="Gris">Gris</option>
    </select>
    <br/><br/>

    <button id="enviarForm">Enviar</button>

    <p id="resultadoForm" style="font-weight: bold; margin-top: 20px;"></p>
  `;

  // Insertamos después de la tabla
  const tabla = document.querySelector('table');
  tabla.insertAdjacentElement('afterend', contenedor);

  // Evento para enviar formulario
  const btnEnviar = contenedor.querySelector('#enviarForm');
  const resultado = contenedor.querySelector('#resultadoForm');

  btnEnviar.addEventListener('click', () => {
    const nombre = contenedor.querySelector('#nombreUser').value.trim() || 'No especificado';

    const intereses = Array.from(contenedor.querySelectorAll('input[name="intereses"]:checked'))
      .map(chk => chk.value);

    const tipoClienteRadio = contenedor.querySelector('input[name="tipoCliente"]:checked');
    const tipoCliente = tipoClienteRadio ? tipoClienteRadio.value : 'No seleccionado';

    const color = contenedor.querySelector('#colorFav').value || 'No seleccionado';

    resultado.innerHTML = `
      Nombre: ${nombre} <br/>
      Intereses: ${intereses.length > 0 ? intereses.join(', ') : 'No seleccionados'} <br/>
      Tipo de Cliente: ${tipoCliente} <br/>
      Color Favorito: ${color}
    `;
  });

});
