// 1. Buscamos el elemento HTML donde queremos escribir (usando su ID)
const elementoFecha = document.getElementById('resultado-fecha');

// 2. Instanciamos el objeto Date para obtener la información del sistema
const fechaActual = new Date();

// 3. Traducimos los números a nombres de días y meses usando arreglos (Arrays)
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const nombreDia = dias[fechaActual.getDay()];
const numeroDia = fechaActual.getDate();
const nombreMes = meses[fechaActual.getMonth()];
const anio = fechaActual.getFullYear();

// 4. Extraemos y formateamos la hora
// padStart(2, '0') obliga a que siempre haya 2 dígitos (ej: "08" en vez de "8")
const horas = fechaActual.getHours().toString().padStart(2, '0');
const minutos = fechaActual.getMinutes().toString().padStart(2, '0');

// 5. Armamos el mensaje final concatenando las variables
const mensaje = `Hoy es ${nombreDia} ${numeroDia} de ${nombreMes} de ${anio}, y son las ${horas}:${minutos} hs.`;

// 6. Inyectamos el texto final dentro del párrafo HTML
elementoFecha.textContent = mensaje;