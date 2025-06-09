// info.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[action="enviar.php"]');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // evitar envío automático
    
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();
    
    if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }
    
    if (!validateEmail(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    
    alert(`Gracias por tu mensaje, ${nombre}. Pronto nos pondremos en contacto contigo.`);
    
    form.reset();
  });
  
  function validateEmail(email) {
    // Validación simple de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
