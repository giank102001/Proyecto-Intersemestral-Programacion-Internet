// Función para mostrar la fecha y hora actual
function actualizarFechaHora() {
    const ahora = new Date();
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const fechaHoraTexto = ahora.toLocaleDateString('es-MX', opciones);
    document.getElementById('fecha-hora').textContent = fechaHoraTexto;
}

// Actualizar la fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora(); // Llamada inicial

// Inicializar el slider cuando el documento esté listo
$(document).ready(function(){
    // Inicializar bxSlider si existe en la página
    if ($('.slider').length) {
        $('.slider').bxSlider({
            auto: true,
            pause: 5000,
            speed: 1000,
            adaptiveHeight: false,
            responsive: true,
            touchEnabled: true,
            pager: true,
            controls: true,
            preloadImages: 'all'
        });
    }
    
    // Botón para ir arriba
    $('#btn-arriba').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    
    // Validación del formulario de contacto
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        let esValido = true;
        
        // Validar nombre
        const nombre = $('#nombre').val().trim();
        if (nombre === '') {
            $('#nombreError').text('Por favor, ingresa tu nombre');
            esValido = false;
        } else {
            $('#nombreError').text('');
        }
        
        // Validar email
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            $('#emailError').text('Por favor, ingresa un correo electrónico válido');
            esValido = false;
        } else {
            $('#emailError').text('');
        }
        
        // Validar teléfono
        const telefono = $('#telefono').val().trim();
        const telefonoRegex = /^\d{10}$/;
        if (telefono === '' || !telefonoRegex.test(telefono)) {
            $('#telefonoError').text('Por favor, ingresa un número de teléfono válido (10 dígitos)');
            esValido = false;
        } else {
            $('#telefonoError').text('');
        }
        
        // Validar mensaje
        const mensaje = $('#mensaje').val().trim();
        if (mensaje === '') {
            $('#mensajeError').text('Por favor, ingresa tu mensaje');
            esValido = false;
        } else {
            $('#mensajeError').text('');
        }
        
        // Si todo es válido, mostrar mensaje de éxito
        if (esValido) {
            $('#contactForm').hide();
            $('#mensajeExito').show();
            
            // Simular envío (en un proyecto real, aquí iría el código para enviar el formulario)
            console.log('Formulario enviado con éxito');
            console.log('Nombre:', nombre);
            console.log('Email:', email);
            console.log('Teléfono:', telefono);
            console.log('Mensaje:', mensaje);
        }
    });
});