// 1. Capturamos los elementos del HTML donde mostraremos la información
const elementoNavegador = document.getElementById('info-navegador');
const elementoResolucion = document.getElementById('info-resolucion');

// ==========================================
// 2. DETECCIÓN DE LA RESOLUCIÓN DE PANTALLA
// ==========================================
// El objeto 'screen' contiene la información de la pantalla del dispositivo
const anchoPantalla = window.screen.width;
const altoPantalla = window.screen.height;

// Inyectamos el texto en el HTML
elementoResolucion.textContent = `Resolución: ${anchoPantalla}px (Ancho) x ${altoPantalla}px (Alto)`;

// ==========================================
// 3. DETECCIÓN DEL NAVEGADOR
// ==========================================
// navigator.userAgent devuelve una cadena de texto enorme con los datos del navegador
const userAgent = navigator.userAgent;
let nombreNavegador = "Desconocido";

// Lógica condicional: Buscamos palabras clave dentro del 'userAgent' usando indexOf()
// El orden es importante porque navegadores como Edge o Chrome incluyen la palabra "Safari" en su cadena por razones históricas de compatibilidad.
if (userAgent.indexOf("Firefox") > -1) {
    nombreNavegador = "Mozilla Firefox";
} else if (userAgent.indexOf("Edg") > -1) { // Edge usa "Edg" en su userAgent moderno
    nombreNavegador = "Microsoft Edge";
} else if (userAgent.indexOf("Chrome") > -1) {
    nombreNavegador = "Google Chrome";
} else if (userAgent.indexOf("Safari") > -1) {
    nombreNavegador = "Apple Safari";
} else {
    nombreNavegador = "Otro navegador";
}

// Inyectamos el resultado en el HTML
elementoNavegador.textContent = `Navegador: ${nombreNavegador}`;