// 1. Capturamos los elementos de la interfaz
const inputCuil = document.getElementById('input-cuil');
const btnValidar = document.getElementById('btn-validar');
const divResultado = document.getElementById('resultado-validacion');

// 2. FUNCIÓN PRINCIPAL DEL ALGORITMO MÓDULO 11
function validarCuilCuit(cuil) {
    // Paso A: Limpiar el texto. Quitamos los guiones para quedarnos solo con números.
    const cuilLimpio = cuil.replace(/-/g, '');

    // Validación básica: Si no tiene 11 caracteres o tiene letras, es inválido
    if (cuilLimpio.length !== 11 || isNaN(cuilLimpio)) {
        return false; 
    }

    // Paso B: Validar los "Tipos" permitidos (20, 23, 24, 27, 30, 33, 34)
    const tiposValidos = ['20', '23', '24', '27', '30', '33', '34'];
    const tipoIngresado = cuilLimpio.substring(0, 2); // Extrae los 2 primeros números
    
    if (!tiposValidos.includes(tipoIngresado)) {
        return false;
    }

    // Paso C: Aplicar la serie numérica (2,3,4,5,6,7) de derecha a izquierda sobre los primeros 10 dígitos.
    // Para simplificarlo en código, ya armamos el arreglo en el orden exacto de izquierda a derecha 
    // como se ve en el ejemplo de la tabla del documento.
    const multiplicadores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    
    let sumaProductos = 0;

    // Multiplicamos cada dígito por su multiplicador y lo sumamos
    for (let i = 0; i < 10; i++) {
        sumaProductos += parseInt(cuilLimpio[i]) * multiplicadores[i];
    }

    // Paso D: Aplicar módulo 11
    const resto = sumaProductos % 11;
    let digitoCalculado = 11 - resto;

    // Paso E: Reglas de asignación del dígito verificador final
    if (digitoCalculado === 11) {
        digitoCalculado = 0;
    } else if (digitoCalculado === 10) {
        return false; // El documento dice que si da 10, es un error (requiere cambio de tipo).
    }

    // Paso F: Comparamos el dígito que calculamos nosotros con el dígito nro 11 que ingresó el usuario
    const digitoIngresado = parseInt(cuilLimpio[10]);
    
    return digitoCalculado === digitoIngresado;
}

// 3. Lógica para mostrar el resultado en pantalla al hacer clic
btnValidar.addEventListener('click', function() {
    const cuilIngresado = inputCuil.value;
    const esValido = validarCuilCuit(cuilIngresado);

    // Removemos clases previas para que la caja no quede trabada en un color
    divResultado.classList.remove('resultado-oculto', 'exito', 'error');
    divResultado.classList.add('mensaje');

    if (esValido) {
        divResultado.textContent = "Verdadero (CUIL/CUIT Válido)";
        divResultado.classList.add('exito');
    } else {
        divResultado.textContent = "Error: El número ingresado es inválido.";
        divResultado.classList.add('error');
    }
});