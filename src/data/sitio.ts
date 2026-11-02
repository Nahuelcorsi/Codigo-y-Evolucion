// Datos generales del sitio. Cambiá acá tu bio, links y habilidades.
export const sitio = {
  nombre: 'Código & Evolución',
  autor: 'Nahuel Corsi',
  rol: 'Desarrollador web y de software',
  ubicacion: 'Buenos Aires, Argentina',
  descripcion:
    'Portfolio de Nahuel Corsi: páginas web, apps y herramientas hechas para resolver problemas reales.',
  frase: 'Construyo páginas web, apps y herramientas que resuelven problemas reales.',
  bio: [
    'Soy Nahuel, de Buenos Aires. Empecé aprendiendo HTML y CSS y hoy armo sitios para negocios, apps móviles y herramientas a medida.',
    'Me gusta partir de un problema concreto: un negocio que necesita vender por WhatsApp, un sistema para llevar el stock, unas luces que quiero manejar desde un celular viejo. Este sitio es el registro de esa evolución, y pronto también va a tener proyectos de robótica.',
  ],
};

export const contacto = [
  { nombre: 'GitHub', url: 'https://github.com/Nahuelcorsi' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/nahuelcorsi_/' },
  { nombre: 'X', url: 'https://x.com/NahuelCorsi_' },
  // { nombre: 'Email', url: 'mailto:tu@mail.com' },
  // { nombre: 'WhatsApp', url: 'https://wa.me/549XXXXXXXXXX' },
];

export const habilidades = [
  {
    grupo: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Astro', 'Three.js (3D)', 'Diseño responsive', 'Web Speech API'],
  },
  {
    grupo: 'Backend y datos',
    items: ['Python', 'Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'SQLite', 'Cloudflare D1', 'APIs REST', 'Google Apps Script'],
  },
  {
    grupo: 'Apps y escritorio',
    items: ['Flutter', 'Android (Java)', 'CustomTkinter', 'C++', 'Mixxx', 'PDF con ReportLab', 'Excel con openpyxl', 'OCR'],
  },
  {
    grupo: 'Automatización y hogar',
    items: ['Termux', 'Domótica Tuya / Smart Life', 'Control por red local', 'Comandos de voz', 'Scripts en Python'],
  },
  {
    grupo: 'Deploy y herramientas',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Cloudflare Workers', 'Cloudflare Pages', 'Wrangler', 'Netlify', 'Linux'],
  },
  {
    grupo: 'Forma de trabajo',
    items: ['Versionado semántico', 'Changelog', 'Tests automáticos', 'Documentación', 'Proyectos reales para clientes'],
  },
];
