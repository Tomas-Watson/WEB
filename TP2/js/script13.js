// 1. Capturamos los visores HTML
const pantallaActual = document.getElementById('pantalla-actual');
const pantallaHistorial = document.getElementById('pantalla-historial');

// 2. Variables de "estado" (aquí guardamos la memoria de la calculadora)
let operandoActual = '';
let operandoAnterior = '';
let operador = undefined;

// 3. Función auxiliar que actualiza lo que el usuario ve en pantalla
function actualizarPantalla() {
    pantallaActual.innerText = operandoActual === '' ? '0' : operandoActual;
    
    if (operador != null) {
        pantallaHistorial.innerText = `${operandoAnterior} ${operador}`;
    } else {
        pantallaHistorial.innerText = '';
    }
}

// 4. Función para agregar un número a la variable
function agregarNumero(numero) {
    // Evita que el usuario escriba múltiples ceros a la izquierda (ej: 0005)
    if (numero === '0' && operandoActual === '0') return;
    
    // Si la pantalla dice '0', lo pisa con el nuevo número (para no escribir 07)
    if (operandoActual === '0' && numero !== '0') {
        operandoActual = numero;
    } else {
        operandoActual += numero; // Concatena el número como si fuera texto ("5" + "4" = "54")
    }
    actualizarPantalla();
}

// 5. Función para los decimales
function agregarDecimal(punto) {
    // Si el número ya tiene un punto, ignoramos la instrucción (evita ej: 5.4.3)
    if (operandoActual.includes('.')) return;
    
    if (operandoActual === '') {
        operandoActual = '0.'; // Si toca el punto al inicio, escribe "0." automáticamente
    } else {
        operandoActual += punto;
    }
    actualizarPantalla();
}

// 6. Función que atrapa el signo (+, -, *, /)
function agregarOperador(op) {
    if (operandoActual === '') return; // Si no hay número tipeado, no hace nada
    
    // Si ya teníamos una operación pendiente (ej: 5 + 5), y el usuario vuelve a tocar otro operador (ej: +), calcula primero el 10
    if (operandoAnterior !== '') {
        calcular();
    }
    
    // Movemos el número actual a la "memoria anterior", guardamos el operador y limpiamos la pantalla principal
    operador = op;
    operandoAnterior = operandoActual;
    operandoActual = '';
    actualizarPantalla();
}

// 7. El núcleo lógico: hace la matemática
function calcular() {
    let calculo; // Variable temporal para guardar el resultado
    
    // Pasamos nuestros textos a números flotantes para poder operar matemáticamente
    const anterior = parseFloat(operandoAnterior);
    const actual = parseFloat(operandoActual);
    
    // Si falta alguno de los dos números, salimos de la función
    if (isNaN(anterior) || isNaN(actual)) return;

    // Switch evalúa qué operador matemático está guardado y ejecuta ese caso
    switch (operador) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            // Manejamos la división por cero para que no rompa la aplicación
            calculo = actual === 0 ? "Error" : anterior / actual;
            break;
        case '%':
            calculo = anterior * (actual / 100);
            break;
        default:
            return;
    }
    
    // Reseteamos el estado para preparar la calculadora para el siguiente número
    operandoActual = calculo.toString();
    operador = undefined;
    operandoAnterior = '';
    actualizarPantalla();
}

// 8. Botones de limpieza y signos
function limpiarTodo() { // Botón CE
    operandoActual = '';
    operandoAnterior = '';
    operador = undefined;
    actualizarPantalla();
}

function limpiarActual() { // Botón C
    operandoActual = '';
    actualizarPantalla();
}

function cambiarSigno() { // Botón ±
    if (operandoActual === '') return;
    // Multiplica el número por -1 para invertir su signo
    operandoActual = (parseFloat(operandoActual) * -1).toString();
    actualizarPantalla();
}