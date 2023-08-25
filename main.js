// la lista de productos
const productos = [
    { nombre: 'Camisetas', precio: 300 },
    { nombre: 'Gorras', precio: 150 },
    { nombre: 'Pantalones', precio: 350 },
    // agregar más productos 
];

const cantidadCamisetasInput = document.getElementById('cantidadCamisetas');
const cantidadGorrasInput = document.getElementById('cantidadGorras');
const cantidadPantalonesInput = document.getElementById('cantidadPantalones');
const calcularCostoButton = document.getElementById('calcularCosto');
const resultadoDiv = document.getElementById('resultado');

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
    const cantidadPantalones = parseInt(cantidadPantalonesInput.value) || 0;


    const productosSeleccionados = [
        { nombre: 'Camisetas', precio: 300, cantidad: cantidadCamisetas },
        { nombre: 'Gorras', precio: 150, cantidad: cantidadGorras },
        { nombre: 'Pantalones', precio: 150, cantidad: cantidadPantalones },
    ];

    const costoTotal = calcularCostoTotal(productosSeleccionados);
    mostrarResultado(costoTotal);
});
