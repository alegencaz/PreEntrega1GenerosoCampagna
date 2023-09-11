const cards = document.querySelectorAll('.card');
const cartItems = document.getElementById('cart-items');
const totalCost = document.getElementById('total');
const checkoutButton = document.getElementById('checkout');
const clearCartButton = document.getElementById('clear-cart');

// calcular costo total
function calcularCostoTotal() {
    let costoTotal = 0;
    const items = JSON.parse(localStorage.getItem('cart')) || [];

    items.forEach(item => {
        costoTotal += item.precio * item.cantidad;
    });

    return costoTotal;
}

// dark mode
const modoOscuroButton = document.getElementById('modoOscuro');
const body = document.body;

modoOscuroButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Cambia el texto del botón según el modo actual
    if (body.classList.contains('dark-mode')) {
        modoOscuroButton.textContent = 'Cambiar a Modo Claro';
    } else {
        modoOscuroButton.textContent = 'Cambiar a Modo Oscuro';
    }
});


// funcionn para mostrar el carrito
function mostrarCarrito() {
    cartItems.innerHTML = '';
    const items = JSON.parse(localStorage.getItem('cart')) || [];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.cantidad} ${item.nombre} - $${item.precio * item.cantidad}`;
        cartItems.appendChild(li);
    });

    const costoTotal = calcularCostoTotal();
    totalCost.textContent = `Total: $${costoTotal}`;
}

// agregar productos al carrito
cards.forEach(card => {
    const addButton = card.querySelector('.add-to-cart');
    const producto = card.getAttribute('data-product');
    const precio = parseInt(card.querySelector('p').textContent.match(/\d+/)[0]);

    addButton.addEventListener('click', () => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = items.find(item => item.nombre === producto);

        if (existingItem) {
            existingItem.cantidad++;
        } else {
            items.push({ nombre: producto, precio, cantidad: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(items));
        mostrarCarrito();
    });
});

// vaciar carrito
clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cart');
    mostrarCarrito();
});

checkoutButton.addEventListener('click', () => {
    alert('Compra finalizada');
});

mostrarCarrito();
