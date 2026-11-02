---
titulo: Hierros Nahuel
resumen: Tienda web y sistema de gestión para mi propio negocio de chapas y hierros.
categoria: software
tecnologias: [Python, CustomTkinter, PostgreSQL, SQLite, HTML, Tailwind, Cloudflare]
imagen: ../../assets/proyectos/hierros-inicio.jpg
rol: "Negocio propio: diseño, desarrollo, base de datos e implementación"
aspectos:
  - "Tienda online con filtros estilo Mercado Libre, carrito y pedidos por WhatsApp"
  - "Sistema de escritorio usado a diario por varias PCs en red"
  - "Si el servidor se cae, sigue funcionando con una base local"
  - "Presupuestos en PDF, exportación a Excel y lectura por OCR"
galeria:
  - src: ../../assets/proyectos/hierros-inicio.jpg
    alt: "Portada de la tienda online de Hierros Nahuel"
  - src: ../../assets/proyectos/hierros-tienda.jpg
    alt: "Catálogo con filtros al costado, buscador y orden por precio"
  - src: ../../assets/proyectos/hierros-movil.jpg
    alt: "Portada de la tienda en el celular"
    movil: true
  - src: ../../assets/proyectos/hierros-tienda-movil.jpg
    alt: "Catálogo en el celular, con botón para filtrar"
    movil: true
destacado: true
orden: 1
anio: 2026
---

Hierros Nahuel es mi negocio, y lo uso como laboratorio. Tiene dos partes que se hablan entre sí.

**La tienda web** muestra el catálogo de caños, ángulos, chapas, perfiles y zinguería, con filtros por categoría, tipo, espesor y precio, y un buscador que no se fija en tildes. Deja armar un carrito que termina en un pedido por WhatsApp. Está publicada en Cloudflare.

**El software de gestión** es una app de escritorio para clientes, direcciones de entrega, artículos, precios, presupuestos y ventas. Usa PostgreSQL en un servidor de la red local para que varias PCs trabajen con los mismos datos, y si el servidor no responde pasa solo a una base SQLite local. Además exporta el catálogo para la web, arma presupuestos en PDF, lee presupuestos desde una captura con OCR y tiene una sección de reparto con mapa y QR.
