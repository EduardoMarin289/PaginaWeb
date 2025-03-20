let carrito = [];

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
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function actualizarCantidad(id, nuevaCantidad) {
    const item = carrito.find(item => item.id === id);
    if (item) {
        item.cantidad = parseInt(nuevaCantidad);
        if (item.cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            actualizarCarrito();
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