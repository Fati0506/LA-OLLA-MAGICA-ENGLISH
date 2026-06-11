/* =============================================
   SISTEMA DE TRADUCCIÓN (i18n)
   ============================================= */
const traducciones = {
  es: {
    /* Navegación */
    'nav.historia':   'Historia',
    'nav.carta':      'Carta',
    'nav.opiniones':  'Opiniones',
    'nav.contacto':   'Contacto',
    'nav.carrito':    'Carrito',

    /* Carrito modal */
    'cart.titulo':    'Carrito de compras',
    'cart.vacio':     'Tu carrito está vacío 🍽️',
    'cart.vaciar':    'Vaciar carrito',
    'cart.pedir':     'Realizar pedido',
    'cart.unidad':    'unidad',
    'cart.unidades':  'unidades',
    'cart.eliminar':  '✕',

    /* Formulario de entrega dentro del carrito */
    'cart.datos.titulo':         'Datos de Entrega:',
    'cart.datos.nombre':         'Tu Nombre:',
    'cart.datos.tipo':           'Tipo de Entrega:',
    'cart.datos.opcion.delivery':'Envío a domicilio (Delivery)',
    'cart.datos.opcion.retiro':  'Retiro en Local',
    'cart.datos.direccion':      'Dirección de envío:',
    'cart.datos.no_necesaria':   'No es necesaria una dirección',

    /* Historia */
    'historia.titulo': 'Nuestra historia',
    'historia.texto':  'En el bullicioso corazón de Lima, "La Olla Mágica" emerge como un crisol de sabores que desafía los sentidos. Fundado en 2024 por visionarios culinarios, este rincón gastronómico transforma ingredientes locales en sinfonías de sabor, llevando a los comensales en un viaje cautivador a través de la rica tapicería culinaria del Perú.',

    /* Carta */
    'carta.titulo':   'Nuestra carta',
    'carta.entradas': 'Entradas',
    'carta.fondos':   'Fondos',
    'carta.postres':  'Postres',
    'carta.anadir':   '+ Añadir',

    /* Nombres de platos traducibles */
    'plato.ensalada':  'Ensalada de palta',
    'plato.sopa':      'Sopa de pollo',
    'plato.tallarines':'Tallarines verdes',
    'plato.crema':     'Crema volteada',
    'plato.torta':     'Torta de chocolate',
    'plato.tartaleta': 'Tartaleta de fresa',

    /* Opiniones */
    'opiniones.titulo':          'Opiniones',
    'opiniones.form.titulo':     'Deja tu opinión',
    'opiniones.form.nombre':     'Tu nombre',
    'opiniones.form.comentario': 'Tu comentario',
    'opiniones.form.enviar':     'Enviar opinión',
    'opiniones.toast':           'añadido al carrito',
    'opiniones.toast.ok':        '¡Opinión enviada! Gracias 😊',
    'opiniones.alerta':          'Por favor completa todos los campos y selecciona una calificación.',

    /* Contacto */
    'contacto.titulo':        'Contacto',
    'contacto.horario':       'Horario',
    'contacto.horario.texto': 'Local: Lun–Dom · 12:00 – 23:00<br>Delivery: Mar–Dom · 14:00 – 22:00',
    'contacto.telefonos':     'Teléfonos',
    'contacto.correo':        'Correo',
    'contacto.gracias':       '¡Gracias por tu preferencia! ❤️',

    /* Alertas de pedido */
    'pedidos.vacio':          'Tu carrito está vacío 🍽️',
    'pedidos.alerta.nombre':  'Por favor, ingresa tu nombre para procesar el pedido. 👤',
    'pedidos.alerta.destino': 'Por favor, ingresa una dirección para el envío. 📍',

    /* Footer */
    'footer.sobre.titulo':  'Sobre nosotros',
    'footer.sobre.texto':   'Buscamos crecer y llegar a ser un restaurante reconocido a nivel nacional. Próximamente más noticias.',
    'footer.acerca.titulo': 'Acerca de La Olla Mágica',
    'footer.copy':          '© 2024 La Olla Mágica. Todos los derechos reservados.',

    /* Botón idioma */
    'lang.boton': '🌐 EN',
  },

  en: {
    /* Navigation */
    'nav.historia':   'History',
    'nav.carta':      'Menu',
    'nav.opiniones':  'Reviews',
    'nav.contacto':   'Contact',
    'nav.carrito':    'Cart',

    /* Cart modal */
    'cart.titulo':    'Shopping cart',
    'cart.vacio':     'Your cart is empty 🍽️',
    'cart.vaciar':    'Clear cart',
    'cart.pedir':     'Place order',
    'cart.unidad':    'unit',
    'cart.unidades':  'units',
    'cart.eliminar':  '✕',

    /* Delivery form inside cart */
    'cart.datos.titulo':         'Delivery Information:',
    'cart.datos.nombre':         'Your Name:',
    'cart.datos.tipo':           'Delivery Type:',
    'cart.datos.opcion.delivery':'Home Delivery',
    'cart.datos.opcion.retiro':  'Store Pickup',
    'cart.datos.direccion':      'Shipping Address:',
    'cart.datos.no_necesaria':   'An address is not required',

    /* History */
    'historia.titulo': 'Our story',
    'historia.texto':  'In the bustling heart of Lima, "La Olla Mágica" emerges as a melting pot of flavors that challenges the senses. Founded in 2024 by culinary visionaries, this gastronomic corner transforms local ingredients into symphonies of flavor, taking diners on a captivating journey through the rich culinary tapestry of Peru.',

    /* Menu */
    'carta.titulo':   'Our menu',
    'carta.entradas': 'Starters',
    'carta.fondos':   'Main courses',
    'cart.postres':   'Desserts',
    'carta.anadir':   '+ Add',

    /* Dish names */
    'plato.ensalada':  'Avocado salad',
    'plato.sopa':      'Chicken soup',
    'plato.tallarines':'Green noodles',
    'plato.crema':     'Upside-down cream',
    'plato.torta':     'Chocolate cake',
    'plato.tartaleta': 'Strawberry tartlet',

    /* Reviews */
    'opiniones.titulo':          'Reviews',
    'opiniones.form.titulo':     'Leave your review',
    'opiniones.form.nombre':     'Your name',
    'opiniones.form.comentario': 'Your comment',
    'opiniones.form.enviar':     'Submit review',
    'opiniones.toast':           'added to cart',
    'opiniones.toast.ok':        'Review submitted! Thank you 😊',
    'opiniones.alerta':          'Please fill in all fields and select a rating.',

    /* Contact */
    'contacto.titulo':        'Contact',
    'contacto.horario':       'Hours',
    'contacto.horario.texto': 'Dine-in: Mon–Sun · 12:00 – 23:00<br>Delivery: Tue–Sun · 14:00 – 22:00',
    'contacto.telefonos':     'Phone numbers',
    'contacto.correo':        'Email',
    'contacto.gracias':       'Thank you for choosing us! ❤️',

    /* Order alerts */
    'pedidos.vacio':          'Your cart is empty 🍽️',
    'pedidos.alerta.nombre':  'Please enter your name to process the order. 👤',
    'pedidos.alerta.destino': 'Please enter a shipping address. 📍',

    /* Footer */
    'footer.sobre.titulo':  'About us',
    'footer.sobre.texto':   'We aim to grow and become a nationally recognized restaurant. More news coming soon.',
    'footer.acerca.titulo': 'About La Olla Mágica',
    'footer.copy':          '© 2024 La Olla Mágica. All rights reserved.',

    /* Language button */
    'lang.boton': '🌐 ES',
  }
};

let idiomaActual = 'es';

function t(clave) {
  return traducciones[idiomaActual][clave] || clave;
}

function aplicarIdioma() {
  document.documentElement.lang = idiomaActual;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const clave = el.getAttribute('data-i18n');
    const valor = t(clave);
    if (valor.includes('<br>')) {
      el.innerHTML = valor;
    } else {
      el.textContent = valor;
    }
  });

  // Ejecutar la validación del estado del horario para mantener sincronía
  verificarHorarioAtencion();

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  document.getElementById('langBtn').textContent = t('lang.boton');

  const tipoInput = document.getElementById('cart-tipo-entrega');
  const direInput = document.getElementById('cart-cliente-direccion');
  if (tipoInput && direInput && tipoInput.value === 'Retiro') {
    direInput.placeholder = t('cart.datos.no_necesaria');
  }

  renderOpiniones();
  renderCarrito();
}

function cambiarIdioma() {
  idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
  aplicarIdioma();
}

document.getElementById('langBtn').addEventListener('click', cambiarIdioma);


/* =============================================
   CARRUSEL
   ============================================= */
let currentIndex = 0;
const totalSlides = 3;
const slide = document.getElementById('slide');
const dots  = document.querySelectorAll('.dot');

function irASlide(index) {
  if (!slide) return;
  currentIndex = index;
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function moverCarrusel(direccion) {
  irASlide((currentIndex + direccion + totalSlides) % totalSlides);
}

document.getElementById('prevBtn').addEventListener('click', () => moverCarrusel(-1));
document.getElementById('nextBtn').addEventListener('click', () => moverCarrusel(1));
dots.forEach((dot, i) => dot.addEventListener('click', () => irASlide(i)));

setInterval(() => moverCarrusel(1), 4000);


/* =============================================
   CARRITO DE COMPRAS
   ============================================= */
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.getElementById('abrirCarritoBtn').addEventListener('click', () => {
  renderCarrito();
  document.getElementById('cartOverlay').classList.add('open');
});

document.getElementById('cerrarCarritoBtn').addEventListener('click', cerrarCarrito);

document.getElementById('cartOverlay').addEventListener('click', function(e) {
  if (e.target === this) cerrarCarrito();
});

function cerrarCarrito() {
  document.getElementById('cartOverlay').classList.remove('open');
}

document.getElementById('vaciarCarritoBtn').addEventListener('click', () => {
  carrito = [];
  guardarCarrito();
  actualizarBadge();
  renderCarrito();
});

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const id     = parseInt(btn.getAttribute('data-id'));
    const nombre = btn.getAttribute('data-name');
    const precio = parseFloat(btn.getAttribute('data-price'));
    agregarProducto(id, nombre, precio, e.currentTarget);
  });
});

function agregarProducto(id, nombre, precio, botonElemento) {
  const existente = carrito.find(item => item.id === id);
  if (existente) {
    existente.qty += 1;
  } else {
    carrito.push({ id, nombre, precio, qty: 1 });
  }
  guardarCarrito();
  
  if (botonElemento) {
    const rectBoton = botonElemento.getBoundingClientRect();
    const carrtitoBtn = document.getElementById('abrirCarritoBtn');
    const rectCarrito = carrtitoBtn.getBoundingClientRect();

    const flyer = document.createElement('div');
    flyer.className = 'flying-item';
    flyer.innerHTML = '🍳'; 
    flyer.style.left = `${rectBoton.left + rectBoton.width / 2 - 25}px`;
    flyer.style.top = `${rectBoton.top + rectBoton.height / 2 - 25}px`;
    document.body.appendChild(flyer);

    requestAnimationFrame(() => {
      flyer.style.left = `${rectCarrito.left + rectCarrito.width / 2 - 25}px`;
      flyer.style.top = `${rectCarrito.top + rectCarrito.height / 2 - 25}px`;
      flyer.style.transform = 'scale(0.2)';
      flyer.style.opacity = '0';
    });

    setTimeout(() => {
      flyer.remove();
      actualizarBadge();
      
      const badge = document.getElementById('cart-count');
      badge.classList.add('cart-pop');
      badge.addEventListener('animationend', () => badge.classList.remove('cart-pop'), { once: true });
    }, 800);
  } else {
    actualizarBadge();
  }
}

function eliminarItem(id) {
  carrito = carrito.filter(item => item.id !== id);
  guardarCarrito();
  actualizarBadge();
  renderCarrito();
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarBadge() {
  document.getElementById('cart-count').textContent =
    carrito.reduce((sum, item) => sum + item.qty, 0);
}

function renderCarrito() {
  const cartEmpty  = document.getElementById('cartEmpty');
  const cartItems  = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotal  = document.getElementById('cartTotal');

  if (!carrito.length) {
    cartEmpty.style.display  = 'block';
    cartEmpty.textContent    = t('cart.vacio');
    cartItems.innerHTML      = '';
    cartFooter.style.display = 'none';
    return;
  }

  cartEmpty.style.display  = 'none';
  cartFooter.style.display = 'block';

  cartItems.innerHTML = carrito.map(item => {
    const label = item.qty === 1 ? t('cart.unidad') : t('cart.unidades');
    return `
      <div class="cart-item">
        <div>
          <div class="cart-item-name">${item.nombre}</div>
          <div class="cart-item-qty">x${item.qty} ${label}</div>
        </div>
        <div class="cart-item-right">
          <div class="cart-item-price">S/ ${(item.precio * item.qty).toFixed(2)}</div>
          <button class="remove-btn" onclick="eliminarItem(${item.id})">${t('cart.eliminar')}</button>
        </div>
      </div>
    `;
  }).join('');

  const total = carrito.reduce((sum, item) => sum + item.precio * item.qty, 0);
  cartTotal.textContent = 'Total: S/ ' + total.toFixed(2);
}

function enviarPedido() {
  if (!carrito || carrito.length === 0) {
    alert(t('pedidos.vacio'));
    return;
  }

  const nombreInput = document.getElementById('cart-cliente-nombre');
  const tipoInput   = document.getElementById('cart-tipo-entrega');
  const direInput   = document.getElementById('cart-cliente-direccion');

  const nombreCliente = nombreInput ? nombreInput.value.trim() : "";
  const tipoEntrega   = tipoInput ? tipoInput.value : "Delivery";
  const direccion     = direInput ? direInput.value.trim() : "";

  if (!nombreCliente) {
    nombreInput.classList.add('input-error');
    nombreInput.focus();
    nombreInput.addEventListener('input', () => nombreInput.classList.remove('input-error'), { once: true });
    return;
  }

  if (tipoEntrega === 'Delivery' && !direccion) {
    direInput.classList.add('input-error');
    direInput.focus();
    direInput.addEventListener('input', () => direInput.classList.remove('input-error'), { once: true });
    return;
  }

  const numeroWhatsApp = "51983841459"; 

  let saludo = idiomaActual === 'es' ? '*¡Hola, La Olla Mágica!* 🍲' : '*Hello, La Olla Mágica!* 🍲';
  let intro = idiomaActual === 'es' ? 'Me gustaría realizar un pedido con los siguientes detalles:' : 'I would like to place an order with the following details:';
  let lblCliente = idiomaActual === 'es' ? '👤 *Cliente:*' : '👤 *Customer:*';
  let lblTipo = idiomaActual === 'es' ? '🛵 *Tipo de Entrega:*' : '🛵 *Delivery Type:*';
  let lblDireccion = idiomaActual === 'es' ? '📍 *Dirección:*' : '📍 *Address:*';
  let lblDetalle = idiomaActual === 'es' ? '*--- DETALLE DEL PEDIDO ---*' : '*--- ORDER DETAILS ---*';
  let lblTotal = idiomaActual === 'es' ? '*Total a pagar:*' : '*Total to pay:*';
  let despedida = idiomaActual === 'es' ? '_Quedo a la espera de su confirmación para coordinar el pago. ¡Muchas gracias!_' : '_I await your confirmation to arrange payment. Thank you very much!_';

  let mensaje = `${saludo}%0A`;
  let totalPedido = 0;
  
  mensaje += `${intro}%0A%0A`;
  mensaje += `${lblCliente} ${nombreCliente}%0A`;
  mensaje += `${lblTipo} ${tipoEntrega === 'Delivery' ? (idiomaActual === 'es' ? 'Delivery' : 'Home Delivery') : (idiomaActual === 'es' ? 'Retiro en Local' : 'Store Pickup')}%0A`;
  
  if (tipoEntrega === 'Delivery') {
    mensaje += `${lblDireccion} ${direccion}%0A`;
  }
  
  mensaje += `%0A${lblDetalle}%0A`;

  carrito.forEach(item => {
    const subtotal = item.precio * item.qty;
    totalPedido += subtotal;
    mensaje += `• *${item.qty}x* ${item.nombre} _(S/ ${subtotal.toFixed(2)})_%0A`;
  });

  mensaje += `%0A${lblTotal} S/ ${totalPedido.toFixed(2)}%0A%0A`;
  mensaje += `${despedida}`;

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  window.open(urlWhatsApp, '_blank');
  
  carrito = [];
  guardarCarrito();
  actualizarBadge();
  renderCarrito();
  cerrarCarrito();
}

document.getElementById('realizarPedidoBtn').addEventListener('click', enviarPedido);

document.addEventListener('change', (e) => {
  if (e.target && e.target.id === 'cart-tipo-entrega') {
    const direInput = document.getElementById('cart-cliente-direccion');
    if (direInput) {
      if (e.target.value === 'Retiro') {
        direInput.value = '';        
        direInput.disabled = true;   
        direInput.style.backgroundColor = '#e0e0e0'; 
        direInput.placeholder = t('cart.datos.no_necesaria');
      } else {
        direInput.disabled = false;  
        direInput.style.backgroundColor = '#fff';
        direInput.placeholder = 'Ej. Av. Universitaria 1230';
      }
    }
  }
});


/* =============================================
   TOAST (notificación flotante)
   ============================================= */
function mostrarToast(mensaje) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = mensaje;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}


/* =============================================
   OPINIONES
   ============================================= */
const opiniones = [
  { nombre: 'Fátima Pacheco', rating: 5, comentario: 'Excelente servicio y comida deliciosa. ¡Volveré pronto!' },
  { nombre: 'Juan Pérez',     rating: 4, comentario: 'Muy buena atención, la comida estaba deliciosa. Recomendado.' },
  { nombre: 'María García',   rating: 5, comentario: 'Una experiencia culinaria increíble. El ambiente es muy bonito.' }
];

function renderOpiniones() {
  const grid = document.getElementById('opiniones-grid');
  if (!grid) return;
  grid.innerHTML = opiniones.map(op => `
    <div class="opinion-card">
      <div class="opinion-avatar">${op.nombre.charAt(0)}</div>
      <div class="opinion-stars">${'★'.repeat(op.rating)}${'☆'.repeat(5 - op.rating)}</div>
      <p class="opinion-text">"${op.comentario}"</p>
      <p class="opinion-name">— ${op.nombre}</p>
    </div>
  `).join('');
}

let ratingSeleccionado = 0;
const starsInput = document.getElementById('starsInput');
const starSpans  = starsInput ? starsInput.querySelectorAll('span') : [];

if (starsInput) {
  starsInput.addEventListener('mouseover', e => {
    if (!e.target.dataset.v) return;
    const val = parseInt(e.target.dataset.v);
    starSpans.forEach((s, i) => s.classList.toggle('active', i < val));
  });

  starsInput.addEventListener('mouseout', () => {
    starSpans.forEach((s, i) => s.classList.toggle('active', i < ratingSeleccionado));
  });

  starsInput.addEventListener('click', e => {
    if (!e.target.dataset.v) return;
    ratingSeleccionado = parseInt(e.target.dataset.v);
    starSpans.forEach((s, i) => s.classList.toggle('active', i < ratingSeleccionado));
  });
}

document.getElementById('enviarOpinionBtn').addEventListener('click', () => {
  const nombre     = document.getElementById('op-nombre').value.trim();
  const comentario = document.getElementById('op-comentario').value.trim();

  if (!nombre || !comentario || !ratingSeleccionado) {
    alert(t('opiniones.alerta'));
    return;
  }

  opiniones.unshift({ nombre, rating: ratingSeleccionado, comentario });
  renderOpiniones();

  document.getElementById('op-nombre').value     = '';
  document.getElementById('op-comentario').value = '';
  starSpans.forEach(s => s.classList.remove('active'));
  ratingSeleccionado = 0;

  mostrarToast(t('opiniones.toast.ok'));
});


/* =============================================
   BOTÓN VOLVER ARRIBA
   ============================================= */
const toTopBtn = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (toTopBtn) toTopBtn.classList.toggle('visible', window.scrollY > 200);
});

if (toTopBtn) {
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* =============================================
   CONTROL DE ESTADO DE HORARIO EN TIEMPO REAL
   ============================================= */
function verificarHorarioAtencion() {
  const elEstado = document.getElementById('estado-tienda');
  if (!elEstado) return;

  const ahora = new Date();
  const horaActual = ahora.getHours();
  
  const horaApertura = 12;
  const horaCierre = 22; 

  if (horaActual >= horaApertura && horaActual < horaCierre) {
    elEstado.textContent = idiomaActual === 'es' ? 'Abierto Ahora' : 'Open Now';
    elEstado.className = 'estado-badge estado-abierto';
  } else {
    elEstado.textContent = idiomaActual === 'es' ? 'Cerrado Ahora' : 'Closed Now';
    elEstado.className = 'estado-badge estado-cerrado';
  }
}

/* =============================================
   ANIMACIÓN AL SCROLL CON INTERSECTION OBSERVER
   ============================================= */
function inicializarAnimacionScroll() {
  const elementosOcultos = document.querySelectorAll('.fade-in-scroll');

  const opciones = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, opciones);

  elementosOcultos.forEach(el => observer.observe(el));
}

/* =============================================
   LÓGICA DEL MODO OSCURO (DARK MODE)
   ============================================= */
function inicializarModoOscuro() {
  const themeBtn = document.getElementById('themeBtn');
  if (!themeBtn) return;

  const temaGuardado = localStorage.getItem('tema');
  
  if (temaGuardado === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    themeBtn.textContent = '🌙';
  }

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      themeBtn.textContent = '☀️';
      localStorage.setItem('tema', 'dark');
    } else {
      themeBtn.textContent = '🌙';
      localStorage.setItem('tema', 'light');
    }
  });
}


/* =============================================
   INICIALIZACIÓN GLOBAL UNIFICADA
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  inicializarModoOscuro(); // Primero se inicializa el tema
  actualizarBadge();
  irASlide(0);
  renderOpiniones();
  aplicarIdioma();         // Traduce e invoca el control de horario
  inicializarAnimacionScroll(); // Lanza los observadores de scroll
});

document
.getElementById("loginBtn")
.addEventListener("click", () => {

  document
    .getElementById("loginOverlay")
    .classList.add("open");

});

document
.getElementById("cerrarLoginBtn")
.addEventListener("click", () => {

  document
    .getElementById("loginOverlay")
    .classList.remove("open");

});