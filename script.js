// ==========================================
// FUNCIONALIDADES JAVASCRIPT MARYCLOTHES
// ==========================================

// 1. CARRITO DE COMPRAS
// ====================

let carrito = [];

/**
 * Agrega un producto al carrito
 * @param {string} nombreProducto - Nombre del producto a agregar
 */
function agregarCarrito(nombreProducto) {
    // Verificar si el producto ya existe en el carrito
    const productoExistente = carrito.find(p => p.nombre === nombreProducto);
    
    if (productoExistente) {
        // Si existe, aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si no existe, agregar nuevo producto
        carrito.push({
            nombre: nombreProducto,
            cantidad: 1
        });
    }
    
    // Mostrar notificación
    mostrarNotificacion(`✅ "${nombreProducto}" agregado al carrito!`);
    
    // Actualizar contador del carrito
    actualizarContadorCarrito();
    
    // Guardar carrito en localStorage
    guardarCarritoLocal();
}

/**
 * Actualiza el número de artículos en el carrito (visual)
 */
function actualizarContadorCarrito() {
    const cantidadTotal = carrito.reduce((total, p) => total + p.cantidad, 0);
    console.log(`Carrito actualizado: ${cantidadTotal} artículos`);
}

/**
 * Guarda el carrito en localStorage del navegador
 */
function guardarCarritoLocal() {
    localStorage.setItem('carrito_maryclothes', JSON.stringify(carrito));
}

/**
 * Carga el carrito desde localStorage
 */
function cargarCarritoLocal() {
    const carritoGuardado = localStorage.getItem('carrito_maryclothes');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarContadorCarrito();
    }
}

/**
 * Obtiene el carrito actual
 */
function obtenerCarrito() {
    return carrito;
}

/**
 * Vacía el carrito
 */
function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem('carrito_maryclothes');
    mostrarNotificacion('🗑️ Carrito vaciado');
    actualizarContadorCarrito();
}

// 2. NOTIFICACIONES
// ==================

/**
 * Muestra una notificación flotante
 * @param {string} mensaje - Mensaje a mostrar
 * @param {number} duracion - Duración en milisegundos (default: 3000)
 */
function mostrarNotificacion(mensaje, duracion = 3000) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    
    // Agregar al DOM
    document.body.appendChild(notificacion);
    
    // Eliminar después de la duración
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, duracion);
}

// Agregar estilos de animación
if (!document.querySelector('style[data-notificacion]')) {
    const style = document.createElement('style');
    style.setAttribute('data-notificacion', 'true');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// 3. NAVEGACIÓN SUAVE
// ====================

/**
 * Desplaza suavemente a una sección
 * @param {string} seccionId - ID de la sección a la que ir
 */
function scrollToSection(seccionId) {
    const seccion = document.getElementById(seccionId);
    if (seccion) {
        seccion.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 4. FORMULARIO DE CONTACTO
// ==========================

/**
 * Envía el formulario de contacto
 * @param {Event} event - Evento del formulario
 */
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir envío tradicional
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validación básica
    if (!nombre || !email || !mensaje) {
        mostrarNotificacion('⚠️ Por favor completa todos los campos', 3000);
        return;
    }
    
    // Validar email
    if (!validarEmail(email)) {
        mostrarNotificacion('⚠️ Email inválido', 3000);
        return;
    }
    
    // Crear mensaje para WhatsApp
    const textoWhatsApp = `Hola MaryClothes!\n\nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;
    const urlWhatsApp = `https://wa.me/c/29764442185763?text=${encodeURIComponent(textoWhatsApp)}`;
    
    // Guardar en localStorage para registro
    guardarConsultaLocal({
        nombre,
        email,
        mensaje,
        fecha: new Date().toLocaleString()
    });
    
    // Mostrar notificación
    mostrarNotificacion('✅ Mensaje preparado. Enviando a WhatsApp...');
    
    // Abrir WhatsApp
    setTimeout(() => {
        window.open(urlWhatsApp, '_blank');
    }, 500);
    
    // Limpiar formulario
    event.target.reset();
}

/**
 * Valida que un email sea correcto
 * @param {string} email - Email a validar
 * @returns {boolean} true si es válido
 */
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

/**
 * Guarda una consulta en localStorage
 * @param {Object} consulta - Objeto con datos de la consulta
 */
function guardarConsultaLocal(consulta) {
    let consultas = JSON.parse(localStorage.getItem('consultas_maryclothes') || '[]');
    consultas.push(consulta);
    localStorage.setItem('consultas_maryclothes', JSON.stringify(consultas));
}

/**
 * Obtiene todas las consultas guardadas
 * @returns {Array} Array de consultas
 */
function obtenerConsultas() {
    return JSON.parse(localStorage.getItem('consultas_maryclothes') || '[]');
}

// 5. FILTRADO DE PRODUCTOS
// =========================

/**
 * Filtra productos por palabra clave
 * @param {string} palabra - Palabra para buscar
 */
function filtrarProductos(palabra) {
    const productos = document.querySelectorAll('.producto-card');
    let conteoVisibles = 0;
    
    productos.forEach(producto => {
        const titulo = producto.querySelector('h3').textContent.toLowerCase();
        const descripcion = producto.querySelector('.descripcion').textContent.toLowerCase();
        
        if (titulo.includes(palabra.toLowerCase()) || descripcion.includes(palabra.toLowerCase())) {
            producto.style.display = 'block';
            conteoVisibles++;
        } else {
            producto.style.display = 'none';
        }
    });
    
    if (conteoVisibles === 0) {
        mostrarNotificacion('❌ No se encontraron productos con ese término');
    }
}

/**
 * Muestra todos los productos (limpia filtro)
 */
function mostrarTodosProductos() {
    document.querySelectorAll('.producto-card').forEach(producto => {
        producto.style.display = 'block';
    });
    mostrarNotificacion('👕 Mostrando todos los productos');
}

// 6. CONTADOR DE PRODUCTOS
// ========================

/**
 * Obtiene la cantidad total de productos en el carrito
 * @returns {number} Total de artículos
 */
function obtenerTotalCarrito() {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
}

/**
 * Obtiene el resumen del carrito
 * @returns {string} Resumen formateado
 */
function obtenerResumenCarrito() {
    if (carrito.length === 0) {
        return 'El carrito está vacío';
    }
    
    let resumen = 'Carrito MaryClothes:\n';
    carrito.forEach((producto, index) => {
        resumen += `${index + 1}. ${producto.nombre} x${producto.cantidad}\n`;
    });
    resumen += `\nTotal de artículos: ${obtenerTotalCarrito()}`;
    
    return resumen;
}

// 7. EFECTOS DE SCROLL
// ====================

/**
 * Anima elementos cuando entran en vista
 */
function animarElementosAlScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.categoria-card, .producto-card, .testimonio-card').forEach(el => {
        observer.observe(el);
    });
}

// 8. BÚSQUEDA DE PRODUCTOS
// ========================

/**
 * Busca productos y muestra resultados
 * @param {string} termino - Término a buscar
 */
function buscarProductos(termino) {
    if (!termino.trim()) {
        mostrarTodosProductos();
        return;
    }
    
    filtrarProductos(termino);
}

// 9. ESTADÍSTICAS
// ================

/**
 * Obtiene estadísticas de uso
 * @returns {Object} Objeto con estadísticas
 */
function obtenerEstadisticas() {
    return {
        productosEnCarrito: carrito.length,
        totalArticulos: obtenerTotalCarrito(),
        consultasEnviadas: obtenerConsultas().length,
        ultimaConsulta: obtenerConsultas().pop() || null
    };
}

/**
 * Imprime estadísticas en consola
 */
function mostrarEstadisticas() {
    const stats = obtenerEstadisticas();
    console.log('📊 Estadísticas MaryClothes:', stats);
    console.log('🛒 Carrito:', obtenerResumenCarrito());
}

// 10. INICIALIZACIÓN
// ===================

/**
 * Inicializa todas las funcionalidades al cargar la página
 */
function inicializar() {
    // Cargar carrito guardado
    cargarCarritoLocal();
    
    // Animar elementos al scroll
    animarElementosAlScroll();
    
    // Log de inicialización
    console.log('✅ MaryClothes iniciado correctamente');
    console.log('📍 Funciones disponibles:');
    console.log('  - agregarCarrito(nombre)');
    console.log('  - vaciarCarrito()');
    console.log('  - obtenerCarrito()');
    console.log('  - buscarProductos(termino)');
    console.log('  - mostrarEstadisticas()');
    console.log('  - enviarFormulario(event)');
}

// Ejecutar inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

// 11. FUNCIONES ÚTILES ADICIONALES
// ==================================

/**
 * Obtiene productos por categoría
 * @param {string} categoria - Nombre de la categoría
 * @returns {Array} Array de productos
 */
function obtenerProductosPorCategoria(categoria) {
    // Categorías definidas en el HTML
    const categoriasDisponibles = ['Blusas', 'Pantalones', 'Vestidos', 'Accesorios'];
    
    if (!categoriasDisponibles.includes(categoria)) {
        console.warn(`Categoría no encontrada: ${categoria}`);
        return [];
    }
    
    return categoriasDisponibles;
}

/**
 * Abre el chat de WhatsApp directo
 */
function abrirWhatsApp() {
    window.open('https://wa.me/c/29764442185763', '_blank');
}

/**
 * Comparte el sitio en redes sociales
 * @param {string} red - Red social ('facebook', 'twitter', 'whatsapp')
 */
function compartirEnRedes(red) {
    const urlSitio = window.location.href;
    const texto = 'Mira esta tienda de ropa MaryClothes. ¡Muy bonitas prendas!';
    
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${urlSitio}`,
        twitter: `https://twitter.com/intent/tweet?url=${urlSitio}&text=${encodeURIComponent(texto)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(texto + ' ' + urlSitio)}`
    };
    
    if (urls[red]) {
        window.open(urls[red], '_blank');
    } else {
        mostrarNotificacion('❌ Red social no disponible');
    }
}

/**
 * Cambia el tema a modo oscuro/claro
 */
function toggleTemaOscuro() {
    document.body.classList.toggle('tema-oscuro');
    const temaActual = document.body.classList.contains('tema-oscuro') ? 'oscuro' : 'claro';
    localStorage.setItem('tema_maryclothes', temaActual);
    mostrarNotificacion(`🌙 Tema ${temaActual} activado`);
}

/**
 * Carga el tema guardado
 */
function cargarTemaGuardado() {
    const tema = localStorage.getItem('tema_maryclothes');
    if (tema === 'oscuro') {
        document.body.classList.add('tema-oscuro');
    }
}

// Cargar tema guardado al iniciar
cargarTemaGuardado();
