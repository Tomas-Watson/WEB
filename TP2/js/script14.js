// ==========================================
// EVENTOS DE PASO DEL CURSOR (HOVER)
// ==========================================

// Se ejecuta con onMouseOver: Le añade la clase CSS 'destacada' a la imagen que tocaste
function destacar(elementoImagen) {
    elementoImagen.classList.add('destacada');
}

// Se ejecuta con onMouseOut: Le quita la clase CSS para que vuelva a la normalidad
function restablecer(elementoImagen) {
    elementoImagen.classList.remove('destacada');
}

// ==========================================
// EVENTOS DE CLIC (ACCIONES ASOCIADAS)
// ==========================================

// Acción 1: Abre el menú de impresión del sistema operativo
function imprimirPagina() {
    window.print();
}

// Acción 2: Dispara una alerta simple en pantalla
function mostrarAlerta() {
    alert("¡Has hecho clic en la Imagen 2! Evento ejecutado exitosamente.");
}

// Acción 3: Simula un cuadro de diálogo del navegador
function simularGuardar() {
    // confirm() abre una ventanita de "Aceptar" o "Cancelar"
    const respuesta = confirm("¿Deseas guardar esta imagen en tu equipo?");
    if (respuesta) {
        alert("Simulando descarga de la imagen...");
    }
}