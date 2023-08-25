const cantidadCamisetasInput = document.getElementById('cantidadCamisetas');
const cantidadGorrasInput = document.getElementById('cantidadGorras');
const calcularCostoButton = document.getElementById('calcularCosto');
const resultadoDiv = document.getElementById('resultado');

// la lista de productos
const productos = [
    { nombre: 'Camisetas', precio: 300 },
    { nombre: 'Gorras', precio: 150 },
    // Agrega más productos aquí
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
    const cantidadCamisetas = parseInt(cantidadCamisetasInput.value) || 0;
    const cantidadGorras = parseInt(cantidadGorrasInput.value) || 0;

    const productosSeleccionados = [
        { nombre: 'Camisetas', precio: 300, cantidad: cantidadCamisetas },
        { nombre: 'Gorras', precio: 150, cantidad: cantidadGorras }
    ];

    const costoTotal = calcularCostoTotal(productosSeleccionados);
    mostrarResultado(costoTotal);
});
