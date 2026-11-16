// Datos de la empresa — editar aquí para actualizar toda la web.
import type { Photo } from './components/PhotoCycler'

export const CONTACT_EMAIL = 'ecopuerta@me.com'
export const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Solicitud de presupuesto · Ecopuerta Factory',
)}`
export const FACEBOOK_URL = 'https://www.facebook.com/ecopuertafactory/'
export const INSTAGRAM_URL = 'https://www.instagram.com/ecopuerta_me/'

// ---------- Fotos ----------
// Para añadir fotos: copiarlas en /public/img y añadirlas a la lista que toque.
export const PHOTOS = {
  puertasLacadas: { src: '/img/puertas-lacadas.webp', alt: 'Dos puertas de interior lacadas en blanco con fresados horizontales' },
  vestidor: { src: '/img/vestidor.webp', alt: 'Vestidor en U con iluminación LED, cajonera central y barras de colgar' },
  armario: { src: '/img/armario-empotrado.webp', alt: 'Armario empotrado de siete puertas lacadas en blanco con molduras clásicas' },
  seguridad: { src: '/img/puerta-seguridad.webp', alt: 'Puerta de seguridad con acabado madera, tirador largo de acero y bisagras reforzadas' },
} satisfies Record<string, Photo>

// ---------- Servicios (tarjetas) ----------
// `photos`: con el cursor encima van pasando en orden aleatorio.
export const SERVICES = [
  {
    key: 'puertas',
    title: 'Puertas a medida',
    tags: ['Diseño propio', 'Lacadas', 'Madera', 'Fresados'],
    body: 'Diseñamos contigo cada puerta: modelo, acabado y herrajes. Lacadas, en madera o con fresados exclusivos, fabricadas a mano y ajustadas al milímetro.',
    photos: [PHOTOS.puertasLacadas],
  },
  {
    key: 'armarios',
    title: 'Armarios y vestidores',
    tags: ['Empotrados', 'Vestidores', 'Luz LED', 'Interiores'],
    body: 'Armarios empotrados y vestidores pensados para tu espacio: interiores a medida, iluminación integrada y frentes que se funden con la casa.',
    photos: [PHOTOS.vestidor, PHOTOS.armario],
  },
  {
    key: 'seguridad',
    title: 'Entrada y seguridad',
    tags: ['Acorazadas', 'Seguridad', 'PVC', 'Aluminio'],
    body: 'Puertas de seguridad, acorazadas y cerramientos en PVC y aluminio. Montaje profesional, herrajes de calidad y barnizados que aguantan el paso del tiempo.',
    photos: [PHOTOS.seguridad],
  },
] as const

// ---------- Trabajos (galería) ----------
export const WORKS: { title: string; place: string; photos: Photo[]; size: 'tall' | 'wide' | 'normal' }[] = [
  { title: 'Vestidor en U con luz integrada', place: 'Vestidores', photos: [PHOTOS.vestidor], size: 'tall' },
  { title: 'Puertas lacadas con fresado', place: 'Puertas de interior', photos: [PHOTOS.puertasLacadas], size: 'normal' },
  { title: 'Puerta de seguridad acabado nogal', place: 'Entrada', photos: [PHOTOS.seguridad], size: 'normal' },
  { title: 'Armario empotrado clásico', place: 'Armarios', photos: [PHOTOS.armario], size: 'wide' },
]
