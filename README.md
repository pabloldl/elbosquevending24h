# El Bosque Vending 24h

Landing estática en español. HTML5, CSS3 y JavaScript vanilla, sin frameworks, npm, Node.js ni compilación. Propuesta web no oficial.

## Visualizar

Abre `index.html` directamente en un navegador moderno. Todos los recursos son locales y las rutas relativas. Los enlaces de Google Maps necesitan conexión; el teléfono abre la aplicación de llamadas compatible.

## Editar

- Textos, dirección, teléfono, horario y enlaces: `index.html`. Actualiza también el bloque JSON-LD y los metadatos cuando cambien los datos comerciales.
- Colores: variables al principio de `css/style.css`. El CSS está dividido por secciones y contiene adaptaciones para móvil, tablet y escritorio.
- Comportamiento: `js/script.js`. Incluye menú móvil, guía seleccionable con teclado, copyright dinámico y revelado mediante Intersection Observer. Respeta la preferencia de movimiento reducido.
- Imágenes: sustituye los recursos de `img/` y actualiza `src`, `alt`, `width` y `height` en el HTML. Utiliza WebP o AVIF con licencia documentada y dimensiones apropiadas. Retira los avisos de ilustración únicamente si las imágenes nuevas son fotografías autorizadas y están correctamente identificadas.
- Tipografía: pila sans-serif del sistema, sin descarga de fuentes externas.

## Imágenes y recursos pendientes

Los cuatro SVG de `img/` y el favicon son ilustraciones originales creadas mediante código para esta propuesta; no se han descargado fotografías de terceros ni reutilizado recursos de otros proyectos. Pueden editarse y utilizarse como parte del proyecto sin atribución de terceros. Son recursos conceptuales provisionales, no fotografías del local ni catálogo de productos disponibles. Cada categoría tiene un recurso distinto, ligero y escalable. La vista de ubicación es conceptual, no cartografía real; enlaza a la búsqueda de Google Maps facilitada por el cliente.

Faltan fotografías profesionales autorizadas: una del punto de vending o máquina real y tres composiciones para las categorías generales. Documentar autor, permiso/licencia y origen de cada sustitución. No usar imágenes de Google Maps o redes sociales sin autorización. El presente diseño utiliza la alternativa de placeholders permitida en el encargo.

## Información por verificar

Confirmar con el propietario los métodos de pago, surtido y disponibilidad, fotografías autorizadas, identidad gráfica y datos comerciales antes de una publicación oficial. No se afirma aceptación de tarjetas. No se han incluido precios, promociones, marcas, reparto, pedidos, reservas ni redes sociales. Los datos de ubicación, teléfono y horario proceden del encargo y no se han verificado de forma independiente.

## Publicar

Sube el contenido de esta carpeta a la raíz pública de cualquier hosting estático con HTTPS, conservando `css/`, `js/` e `img/`. No hay comandos de instalación ni de build. Una vez exista un dominio definitivo, añade una URL canónica y `og:url` absolutos; para la previsualización social añade `og:image` con una imagen raster autorizada y URL absoluta. No se ha inventado un dominio ni una imagen social pública. No se instalan cookies, analítica, formularios ni mapas embebidos.

## Validación

Se comprueban rutas locales, recursos SVG, ausencia de imágenes repetidas, anclas, datos JSON-LD y enlaces de teléfono y Maps mediante revisión estática. El diseño incluye breakpoints a 1100, 800 y 600 px y soporte para movimiento reducido. La validación visual en navegador y la ejecución de las interacciones deben completarse en móvil, tablet y escritorio antes de publicar; no se dispone de automatización de navegador en esta sesión.

Prueba manual: abrir en 375, 768 y 1440 px; comprobar ausencia de desbordamiento; abrir/cerrar menú, navegar y pulsar Escape; recorrer enlaces y botones con Tab; seleccionar los tres pasos con Enter y flechas; activar movimiento reducido; revisar scroll, imágenes, consola, llamada y ubicación. Sin JavaScript el contenido comercial permanece visible.
