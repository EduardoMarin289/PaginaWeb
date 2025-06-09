document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.createElement('div');
  contenedor.style.marginTop = "30px";

  contenedor.innerHTML = `
    <h2>Formulario para Trabajadores</h2>

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" placeholder="Tu nombre"><br><br>

    <label><input type="checkbox" id="suscripcion"> Suscribirme a noticias laborales</label><br><br>

    <p>¿Qué turno prefieres?</p>
    <label><input type="radio" name="turno" value="Mañana"> Mañana</label>
    <label><input type="radio" name="turno" value="Tarde"> Tarde</label>
    <label><input type="radio" name="turno" value="Noche"> Noche</label><br><br>

    <p>Áreas de interés:</p>
    <ul>
      <li>Tecnología</li>
      <li>Educación</li>
      <li>Oficina</li>
    </ul>

    <label for="herramienta">Herramienta preferida:</label>
    <select id="herramienta">
      <option value="">--Selecciona una opción--</option>
      <option value="Laptop">Laptop</option>
      <option value="Tablet">Tablet</option>
      <option value="Celular">Celular</option>
    </select><br><br>

    <button id="mostrarDatos">Enviar</button>

    <div id="resultado" style="margin-top:15px; border:1px solid #aaa; padding:10px;"></div>
  `;

  document.body.appendChild(contenedor);

  document.getElementById('mostrarDatos').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const suscrip = document.getElementById('suscripcion').checked ? 'Sí' : 'No';

    let turno = '';
    document.getElementsByName('turno').forEach(el => {
      if (el.checked) turno = el.value;
    });

    const herramienta = document.getElementById('herramienta').value;

    document.getElementById('resultado').innerHTML = `
      <p><strong>Nombre:</strong> ${nombre || 'No ingresado'}</p>
      <p><strong>Suscripción:</strong> ${suscrip}</p>
      <p><strong>Turno preferido:</strong> ${turno || 'No seleccionado'}</p>
      <p><strong>Herramienta preferida:</strong> ${herramienta || 'No seleccionada'}</p>
    `;
  });
});
