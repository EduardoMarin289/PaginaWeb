let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(id, nombre, precio) {
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    guardarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
    guardarCarrito();
}

function actualizarCantidad(id, nuevaCantidad) {
    const item = carrito.find(item => item.id === id);
    if (item) {
        item.cantidad = parseInt(nuevaCantidad);
        if (item.cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            actualizarCarrito();
            guardarCarrito();
        }
    }
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';
    
    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        const itemHTML = `
            <div class="carrito-item">
                <span>${item.nombre}</span>
                <div>
                    <input type="number" class="cantidad" value="${item.cantidad}" 
                           onchange="actualizarCantidad(${item.id}, this.value)" min="1">
                    <span>$${subtotal.toFixed(2)}</span>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
                </div>
            </div>
        `;
        carritoItems.innerHTML += itemHTML;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

 // Cargar datos del carrito desde localStorage
 window.onload = function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const resumenItems = document.getElementById('resumen-items');
    const resumenTotal = document.getElementById('resumen-total');
    
    let total = 0;
    resumenItems.innerHTML = '';
    
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        resumenItems.innerHTML += `
            <p>${item.nombre} x ${item.cantidad} - $${subtotal.toFixed(2)}</p>
        `;
    });
    
    resumenTotal.textContent = total.toFixed(2);
};

function validarFormulario(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para procesar el formulario
    alert('¡Gracias por tu compra! Te contactaremos pronto.');
    localStorage.removeItem('carrito'); // Limpiar el carrito
    window.location.href = '/pagina.escuela/inicio.html';
    return false;
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function procederCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de proceder a la compra.');
        return;
    }
    window.location.href = '/pagina.escuela/formulario-compra.html';
}

// Cargar el carrito al iniciar la página
window.onload = function() {
    actualizarCarrito();
}; 