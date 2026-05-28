# 💃 MaryClothes - Landing Page de Tienda de Ropa

Bienvenido a **MaryClothes**, una tienda de ropa online moderna y elegante con un sitio web completamente funcional.

## 📁 Estructura del Proyecto

```
MaryClothes-landing/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS completos
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este archivo
```

---

## 🎯 Características Principales

### ✨ **Frontend Moderno**
- Diseño **responsive** (adapta a cualquier dispositivo)
- Gradientes atractivos y animaciones suaves
- Interface intuitiva y fácil de usar
- Iconos emoji para mayor calidez

### 🛍️ **Funcionalidades de Tienda**
- **Catálogo de Productos**: Visualiza 6 productos destacados
- **Carrito de Compras**: Agrega productos (guardado en localStorage)
- **Categorías**: Blusas, Pantalones, Vestidos, Accesorios
- **Ofertas Especiales**: Promociones y descuentos destacados
- **Testimonios de Clientes**: Reseñas con calificaciones ⭐

### 💬 **Comunicación**
- **Formulario de Contacto**: Envía mensajes directamente a WhatsApp
- **Información de Contacto**: Email, teléfono, ubicación
- **Integración WhatsApp**: Link directo a conversaciones

### 🎨 **Diseño**
- Colores principales: Rosa (#ff6b9d) y Vino (#c44569)
- Tipografía profesional
- Animaciones al scroll
- Efectos hover en elementos interactivos

---

## 📱 Secciones del Sitio

### 1. **Header (Encabezado)**
- Logo "MaryClothes" con tagline
- Navegación fija al top
- Enlaces a todas las secciones

### 2. **Hero Banner**
- Texto promocional atractivo
- Botón "Ver Catálogo"
- Fondo con gradiente

### 3. **Categorías**
- 4 categorías principales de ropa
- Iconos descriptivos
- Efectos hover

### 4. **Catálogo**
- Grid de 6 productos
- Imágenes (placeholders)
- Precios y descripciones
- Botones "Agregar al Carrito"
- Badges (Nuevo, Popular, Rebajas)

### 5. **Ofertas Especiales**
- 3 promociones destacadas
- Descuentos y beneficios
- Fondo con gradiente llamativo

### 6. **Testimonios**
- 3 reseñas de clientes
- Calificaciones en estrellas

### 7. **Contacto**
- Información de contacto (WhatsApp, Email, Ubicación)
- Formulario de consulta interactivo
- Integración con WhatsApp

### 8. **Footer**
- Información de la empresa
- Enlaces útiles
- Redes sociales
- Copyright

---

## 🚀 Cómo Usar

### Visualizar el Sitio
1. Abre `index.html` en tu navegador
2. Navega por las diferentes secciones
3. ¡Disfruta! 😊

### Agregar Productos al Carrito (Consola)
```javascript
agregarCarrito("Blusa Floral");
```

### Ver el Carrito
```javascript
obtenerCarrito();
obtenerResumenCarrito();
```

### Vaciar Carrito
```javascript
vaciarCarrito();
```

### Buscar Productos
```javascript
buscarProductos("vestido");
```

---

## 💻 Funciones JavaScript Principales

### Carrito de Compras
- `agregarCarrito(nombre)` - Agrega producto al carrito
- `vaciarCarrito()` - Vacía el carrito
- `obtenerCarrito()` - Obtiene el carrito actual
- `obtenerTotalCarrito()` - Total de artículos
- `obtenerResumenCarrito()` - Resumen formateado

### Formulario
- `enviarFormulario(event)` - Envía formulario a WhatsApp
- `validarEmail(email)` - Valida email

### Navegación
- `scrollToSection(id)` - Desplaza suavemente a sección

### Búsqueda
- `buscarProductos(termino)` - Busca productos
- `filtrarProductos(palabra)` - Filtra productos

### Utilidades
- `mostrarNotificacion(mensaje)` - Muestra notificación flotante
- `abrirWhatsApp()` - Abre chat de WhatsApp
- `compartirEnRedes(red)` - Comparte en redes sociales
- `mostrarEstadisticas()` - Muestra estadísticas en consola

---

## 🎨 Colores Principales

| Elemento | Color |
|----------|-------|
| Primario | #ff6b9d (Rosa) |
| Secundario | #c44569 (Vino) |
| Oscuro | #2c3e50 |
| Claro | #f8f9fa |
| Blanco | #ffffff |

---

## 🔧 Personalización

### Cambiar Colores
En `styles.css` línea 14-22:
```css
:root {
    --color-primary: #tu-color-aqui;
    --color-secondary: #tu-otro-color;
}
```

### Cambiar Link de WhatsApp
Busca `https://wa.me/c/29764442185763` en los archivos y reemplázalo.

### Agregar Productos
Duplica `<div class="producto-card">` en la sección catálogo.

---

## 📱 Responsive Design

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

---

## ✅ Características

- ✅ Diseño responsive
- ✅ Carrito de compras con localStorage
- ✅ Notificaciones flotantes
- ✅ Navegación suave
- ✅ Formulario de contacto
- ✅ Integración WhatsApp
- ✅ Búsqueda de productos
- ✅ Animaciones al scroll
- ✅ Testimonios
- ✅ Ofertas especiales
- ✅ Validación de email
- ✅ Compatible con navegadores modernos

---

## 📞 Contacto

**WhatsApp**: [Ir a WhatsApp](https://wa.me/c/29764442185763)  
**Email**: contacto@maryclothes.com

---

**¡Gracias por visitar MaryClothes! 💃✨**
