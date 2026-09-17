// ==========================================
// 1. LA FUNCIÓN REQUERIDA POR EL EJERCICIO
// ==========================================
// Esta es la función pura que recibe un arreglo y devuelve la suma total
function sumarArreglo(arregloNumeros) {
    let sumaTotal = 0; // Inicializamos el acumulador en cero
    
    // Iteramos sobre cada elemento del arreglo
    for (let i = 0; i < arregloNumeros.length; i++) {
        // Sumamos el valor actual al acumulador
        sumaTotal += arregloNumeros[i];
    }
    
    return sumaTotal; // Devolvemos el resultado final
}

// ==========================================
// 2. LÓGICA DE LA INTERFAZ (DOM)
// ==========================================
// Capturamos los elementos del HTML
const inputElement = document.getElementById('input-numeros');
const btnCalcular = document.getElementById('btn-calcular');
const resultadoElement = document.getElementById('resultado-suma');

// Le decimos al botón que escuche cuando le hacen "click"
btnCalcular.addEventListener('click', function() {
    
    // Obtenemos el texto que escribió el usuario (ej: "1, 2, 3")
    const textoIngresado = inputElement.value;
    
    // Convertimos ese texto en un arreglo separando por las comas
    // Luego, convertimos cada pedacito de texto en un número entero (Number)
    const arregloDeTextos = textoIngresado.split(',');
    const arregloDeNumeros = [];

    /*
    *Una variable del tipo let tiene su alcance limitado
    *a un bloque de codigo
    *Ademas puede reasignarse
    */
    for (let i = 0; i < arregloDeTextos.length; i++) {
        // Parseamos a entero para evitar que se concatenen como si fueran palabras
        const numeroLimpio = parseInt(arregloDeTextos[i].trim()); 
        
        // Validamos que sea realmente un número antes de meterlo al arreglo final
        if (!isNaN(numeroLimpio)) {
            arregloDeNumeros.push(numeroLimpio);
        }
    }

    // Llamamos a la función que armamos arriba pasándole el arreglo de enteros
    const resultado = sumarArreglo(arregloDeNumeros);

    // Mostramos el resultado en la pantalla
    resultadoElement.textContent = `La suma total es: ${resultado}`;
});