
  // Fondo que cambia color loco cada segundo
  setInterval(() => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 85%)`;
    document.body.style.backgroundColor = randomColor;
  }, 1000);

  // Confetti de emojis para búsqueda
  function confettiEmojis() {
    const emojis = ['🎉', '🔥', '💥', '💣', '⚡', '🤪', '🛸', '👾'];
    let count = 0;
    const interval = setInterval(() => {
      if (count > 15) {
        clearInterval(interval);
        return;
      }
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      console.log(emoji); // Como demo, lo ponemos en consola (puedes expandirlo)
      count++;
    }, 100);
  }

  // Botón Buscar con alerta loca + confetti
  document.querySelector('div input[type="text"]').nextElementSibling.addEventListener('click', function() {
    const textoBusqueda = document.querySelector('div input[type="text"]').value.trim();
    if (!textoBusqueda) {
      alert('¡Escribe algo, papu! 🥱');
      return;
    }
    alert(`Buscando: "${textoBusqueda}"... ¡Qué locura! 🤯🤪`);
    confettiEmojis();
  });

  // Botones COMPRAR con efecto temblor y cambio de colores rápido
  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.trim().toUpperCase() === 'COMPRAR') {
      btn.style.transition = 'all 0.2s ease';
      btn.addEventListener('click', () => {
        const producto = btn.previousElementSibling ? btn.previousElementSibling.textContent : 'Producto insano';
        
        // Temblor y cambio de color
        let count = 0;
        const shakeInterval = setInterval(() => {
          btn.style.transform = `translate(${(Math.random() - 0.5) * 10}px, ${(Math.random() - 0.5) * 10}px)`;
          btn.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
          count++;
          if (count > 10) {
            clearInterval(shakeInterval);
            btn.style.transform = 'translate(0,0)';
            btn.style.backgroundColor = '';
          }
        }, 50);

        alert(`¡Compraste: ${producto}! ¡Bien insano! 🤡🔥`);
      });
    }
  });
