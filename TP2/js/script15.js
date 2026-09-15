// 1. Capturamos el div donde escribiremos el contador
const elementoCronometro = document.getElementById('cronometro');

// 2. Establecemos la fecha de inicio fija que pide el TP (Formato Año-Mes-Día)
// Nota: En JS los meses empiezan desde 0, pero usando este formato de cadena de texto (ISO) se lee exacto.
const fechaInicio = new Date('2023-07-01T00:00:00');

function calcularTiempoTranscurrido() {
    // Tomamos la fecha y hora exacta del momento en que se ejecuta la función
    const fechaActual = new Date();
    
    // Al restar dos objetos Date en JS, obtenemos la diferencia en milisegundos
    let diferenciaMilisegundos = fechaActual - fechaInicio;
    
    // Transformamos los milisegundos a valores que los humanos entendemos
    // 1 segundo = 1000ms | 1 minuto = 60s | 1 hora = 60m | 1 día = 24h
    const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenciaMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenciaMilisegundos % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenciaMilisegundos % (1000 * 60)) / 1000);
    
    // Dibujamos el texto en la pantalla
    elementoCronometro.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Ejecutamos por primera vez
calcularTiempoTranscurrido();

// Hacemos que se actualice cada 1 segundo (1000 milisegundos)
setInterval(calcularTiempoTranscurrido, 1000);