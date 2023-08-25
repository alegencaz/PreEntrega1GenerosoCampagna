const calcularCostoButton = document.getElementById('calcularCosto');
const resultadoDiv = document.getElementById('resultado');

// la lista de productos
const productos = [
    { nombre: 'Camisetas', precio: 300 },
    { nombre: 'Gorras', precio: 150 },
    { nombre: 'Pantalones', precio: 350 },
    // agregar más productos 
];

// function calcular el costo total
function calcularCostoTotal(productosSeleccionados) {
    let costoTotal = 0;
    for (const producto of productosSeleccionados) {
        costoTotal += producto.precio * producto.cantidad;
    }
    return costoTotal;
}

// resultado dom
function mostrarResultado(costoTotal) {
    resultadoDiv.innerHTML = `El costo total de su compra en SportsBuenosAires es de: $${costoTotal}`;
}

// manejador de evento para el botón de cálculo
calcularCostoButton.addEventListener('click', function() {
    const productosSeleccionados = [];

    for (const producto of productos) {
        const cantidadInput = document.getElementById(`cantidad${producto.nombre}`);
        const cantidad = parseInt(cantidadInput.value) || 0;

        if (cantidad > 0) {
            producto.cantidad = cantidad;
            productosSeleccionados.push(producto);
        }
    }

    const costoTotal = calcularCostoTotal(productosSeleccionados);
    mostrarResultado(costoTotal);
});
