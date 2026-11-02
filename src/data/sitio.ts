// Datos generales del sitio. Cambiá acá tu bio, links y habilidades.
export const sitio = {
  nombre: 'Código & Evolución',
  autor: 'Nahuel Corsi',
  rol: 'Desarrollador web full stack',
  ubicacion: 'Buenos Aires, Argentina',
  descripcion:
    'Nahuel Corsi, desarrollador web full stack en Buenos Aires. Sitios web, sistemas de gestión y apps a medida para negocios.',
  frase: 'Diseño y desarrollo sitios web, sistemas y apps a medida. Rápidos, claros y pensados para que tu negocio funcione mejor.',
  bio: [
    'Soy Nahuel Corsi, desarrollador web full stack de Buenos Aires. Me ocupo de un proyecto de punta a punta: diseño, desarrollo, base de datos y publicación.',
    'Además de programar, llevo adelante mi propio negocio, Hierros Nahuel. Por eso entiendo lo que necesita un comercio: vender más fácil, ordenar la información y ahorrar tiempo. Construí su tienda online y el sistema de gestión que usamos todos los días.',
    'Trabajo con código propio, sin plantillas, y cuido que cada sitio cargue rápido, se vea bien en el celular y sea fácil de mantener. Código & Evolución es el registro de ese camino, que pronto también va a sumar proyectos de robótica.',
  ],
};

// WhatsApp: número en formato internacional sin + ni espacios (54 9 11 ...).
export const whatsapp = {
  numero: '5491132112203',
  mensaje: 'Hola Nahuel, vi tu página Código & Evolución y quería consultarte por un proyecto.',
};

export const linkWhatsapp = (mensaje = whatsapp.mensaje) =>
  `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;

export const contacto = [
  { nombre: 'GitHub', url: 'https://github.com/Nahuelcorsi' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/nahuelcorsi_/' },
  { nombre: 'X', url: 'https://x.com/NahuelCorsi_' },
  // { nombre: 'Email', url: 'mailto:tu@mail.com' },
];

export const servicios = [
  {
    titulo: 'Sitios web para negocios',
    texto: 'Páginas institucionales y landings con diseño propio, rápidas, adaptadas al celular y listas para aparecer en Google.',
  },
  {
    titulo: 'Tiendas y catálogos online',
    texto: 'Catálogos con carrito que terminan en un pedido por WhatsApp o en un pago, fáciles de actualizar.',
  },
  {
    titulo: 'Sistemas a medida',
    texto: 'Gestión de clientes, stock, presupuestos y ventas, con base de datos y reportes en PDF o Excel.',
  },
  {
    titulo: 'Apps y herramientas web',
    texto: 'Calculadoras, paneles y aplicaciones que resuelven una tarea concreta de tu trabajo.',
  },
];

export const proceso = [
  { titulo: 'Charla inicial', texto: 'Entiendo qué necesitás, para quién es y qué tiene que lograr el sitio.' },
  { titulo: 'Propuesta y diseño', texto: 'Defino la estructura y el diseño, y lo revisamos juntos antes de programar.' },
  { titulo: 'Desarrollo', texto: 'Programo con avances que podés ver online, versión por versión.' },
  { titulo: 'Publicación y soporte', texto: 'Lo publico con tu dominio, te explico cómo usarlo y sigo disponible para cambios.' },
];

export const habilidades = [
  { grupo: 'Lenguajes', items: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'C++', 'SQL', 'HTML y CSS'] },
  { grupo: 'Frontend y apps', items: ['Astro', 'Tailwind CSS', 'Three.js', 'Flutter', 'Android', 'CustomTkinter'] },
  { grupo: 'Backend y datos', items: ['Node.js', 'NestJS', 'Prisma', 'APIs REST', 'PostgreSQL', 'SQLite', 'Cloudflare D1'] },
  { grupo: 'Deploy y herramientas', items: ['Git y GitHub', 'GitHub Actions', 'Cloudflare Workers', 'Cloudflare Pages', 'Netlify', 'Linux'] },
];
