// Somos SportsBSAS una tienda para comprar productos

const productos = [
    { nombre: 'Camisetas', precio: 300 },
    { nombre: 'Gorras', precio: 150 },
    // estos son mis productos
];

// funcion para calcular el costo 
function calcularCostoTotal(productosSeleccionados) {
    let costoTotal = 0;
    for (const producto of productosSeleccionados) {
        costoTotal += producto.precio * producto.cantidad;
    }
    return costoTotal;
}

// alerta para mostrar el costo
function mostrarResultado(costoTotal) {
    alert(`El costo total de su compra en SportsBuenosAires es de: $${costoTotal}`);
}

//  funcion para que el usuario ingrese 
function interactuarConUsuario() {
    const productosSeleccionados = [];
    for (const producto of productos) {
        const cantidad = parseInt(prompt(`Hola! ingrese la cantidad de "${producto.nombre}" que quiere comprar porfavor`));
        if (!isNaN(cantidad) && cantidad > 0) {
            producto.cantidad = cantidad;
            productosSeleccionados.push(producto);
        } else {
            alert('La cantidad esta mal, intentelo de nuevo porfavor - SportsBSAS');
        }
    }

    if (productosSeleccionados.length > 0) {
        const costoTotal = calcularCostoTotal(productosSeleccionados);
        mostrarResultado(costoTotal);
    } else {
        alert('no se encontro ningun producto, intentelo nuevamente porfavor -SportsBSAS');
    }
}

interactuarConUsuario();
