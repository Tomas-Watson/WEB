// 1. Capturamos el contenedor del HTML donde escribiremos la hora
const contenedorReloj = document.getElementById('reloj-digital');

// 2. Función encargada de calcular y dibujar la hora actual
function actualizarReloj() {
    const ahora = new Date(); // Obtenemos el tiempo exacto de la computadora
    
    // Extraemos horas, minutos y segundos
    // padStart(2, '0') asegura que siempre veamos 2 dígitos (ej: "09:05:01" en vez de "9:5:1")
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    // Armamos la cadena de texto con el formato HH:MM:SS
    const horaFormateada = `${horas}:${minutos}:${segundos}`;
    
    // Inyectamos el texto en el HTML
    contenedorReloj.textContent = horaFormateada;
}

// 3. Ejecutamos la función una vez de inmediato para que no muestre "00:00:00" al inicio
actualizarReloj();

// 4. LÓGICA DE ACTUALIZACIÓN CONTINUA
// setInterval le dice al navegador: "Ejecuta esta función una y otra vez, esperando X milisegundos"
// 1000 milisegundos = 1 segundo
setInterval(actualizarReloj, 1000);