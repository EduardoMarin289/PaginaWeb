document.addEventListener('DOMContentLoaded', () => {
  // Buscar
  const inputBuscar = document.querySelector('input[type="text"][placeholder="Buscar..."]');
  const btnBuscar = inputBuscar.nextElementSibling;

  btnBuscar.addEventListener('click', () => {
    const query = inputBuscar.value.trim();
    alert(`Buscando: "${query || 'Nada ingresado'}"`);
  });

  // Botones COMPRAR
  const botonesComprar = document.querySelectorAll('button');

  botonesComprar.forEach(boton => {
    // Solo para botones que no sean "Regresar"
    if (boton.textContent.trim() === "COMPRAR") {
      boton.addEventListener('click', () => {
        const productoDiv = boton.closest('div[style*="display: flex"]');
        const img = productoDiv ? productoDiv.querySelector('img') : null;
        const nombreProducto = img ? img.alt : 'Producto desconocido';
        alert(`Has comprado: ${nombreProducto}`);
      });
    }
  });

  // Crear formulario dinámico con etiquetas, checkbox, radio, select
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

  const contenedorPadre = document.querySelector('div[style*="display: flex"]')?.parentElement;
  if (contenedorPadre) {
    contenedorPadre.appendChild(contenedor);
  } else {
    document.body.appendChild(contenedor);
  }

  // Evento enviar formulario
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
