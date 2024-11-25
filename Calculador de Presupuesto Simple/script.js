// Selección de elementos del DOM
const nombreEntrada = document.getElementById('nombreEntrada');
const montoEntrada = document.getElementById('montoEntrada');
const totalIngresos = document.getElementById('totalIngresos');
const totalGastos = document.getElementById('totalGastos');
const saldoRestante = document.getElementById('saldoRestante');
const listaEntradas = document.getElementById('listaEntradas');

let ingresos = 0;
let gastos = 0;

// Función para actualizar el resumen de presupuesto
function actualizarResumen() {
    totalIngresos.textContent = ingresos;
    totalGastos.textContent = gastos;
    saldoRestante.textContent = ingresos - gastos;
}

// Función para agregar una entrada a la lista
function agregarEntrada(nombre, monto, tipo) {
    const li = document.createElement('li');
    li.classList.add(tipo === 'ingreso' ? 'ingreso-item' : 'gasto-item');
    li.innerHTML = `${nombre} - $${monto} <span class="eliminar">x</span>`;

    listaEntradas.appendChild(li);

    // Actualizar ingresos o gastos
    if (tipo === 'ingreso') {
        ingresos += monto;
    } else {
        gastos += monto;
    }
    actualizarResumen();

    // Agregar funcionalidad para eliminar la entrada
    li.querySelector('.eliminar').addEventListener('click', () => {
        listaEntradas.removeChild(li);
        if (tipo === 'ingreso') {
            ingresos -= monto;
        } else {
            gastos -= monto;
        }
        actualizarResumen();
    });
}

// Eventos de botones para añadir ingreso o gasto
document.getElementById('agregarIngreso').addEventListener('click', () => {
    const nombre = nombreEntrada.value.trim();
    const monto = parseFloat(montoEntrada.value);
    if (nombre && monto > 0) {
        agregarEntrada(nombre, monto, 'ingreso');
        nombreEntrada.value = '';
        montoEntrada.value = '';
    } else {
        alert('Por favor ingresa un nombre y un monto válido');
    }
});

document.getElementById('agregarGasto').addEventListener('click', () => {
    const nombre = nombreEntrada.value.trim();
    const monto = parseFloat(montoEntrada.value);
    if (nombre && monto > 0) {
        agregarEntrada(nombre, monto, 'gasto');
        nombreEntrada.value = '';
        montoEntrada.value = '';
    } else {
        alert('Por favor ingresa un nombre y un monto válido');
    }
});
