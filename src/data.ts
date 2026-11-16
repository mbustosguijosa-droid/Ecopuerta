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
  castellana: { src: '/img/puerta-castellana.webp', alt: 'Puerta castellana de pino con cuarterones de sapelli, recién salida del taller' },
  entradaSapelli: { src: '/img/puerta-entrada-sapelli.webp', alt: 'Puerta de entrada en sapelli con cuarterones, pomo central y cerradura de seguridad dorada' },
} satisfies Record<string, Photo>

// ---------- Taller ----------
export const ADDRESS = {
  street: 'Calle Jorge Manrique',
  area: 'Polígono El Laurel',
  city: '45960 Chozas de Canales (Toledo)',
}
export const MAPS_QUERY = 'Calle Jorge Manrique, Polígono El Laurel, 45960 Chozas de Canales, Toledo'

// ---------- Servicios (tarjetas) ----------
// `photos`: con el cursor encima van pasando en orden aleatorio.
export const SERVICES = [
  {
    key: 'puertas',
    title: 'Puertas personalizadas',
    tags: ['Diseño a medida', 'Madera noble', 'Seguridad', 'Acorazadas'],
    body: 'Puertas de entrada diseñadas contigo: cuarterones, maderas, barnices y herrajes a elegir. Fabricadas a mano, blindadas o acorazadas, y ajustadas al milímetro.',
    photos: [PHOTOS.entradaSapelli, PHOTOS.castellana],
  },
  {
    key: 'armarios',
    title: 'Armarios y vestidores',
    tags: ['Empotrados', 'Vestidores', 'Luz LED', 'Interiores'],
    body: 'Armarios empotrados y vestidores pensados para tu espacio: interiores a medida, iluminación integrada y frentes que se funden con la casa.',
    photos: [PHOTOS.vestidor, PHOTOS.armario],
  },
  {
    key: 'hogar',
    title: 'Puertas para el hogar',
    tags: ['Interior', 'Lacadas', 'Fresados', 'Herrajes'],
    body: 'Puertas de interior que visten la casa: lacadas en blanco, en madera o con fresados de diseño, con herrajes a juego y un montaje limpio y preciso.',
    photos: [PHOTOS.puertasLacadas, PHOTOS.seguridad],
  },
] as const

// ---------- Trabajos (galería) ----------
export const WORKS: { title: string; place: string; photos: Photo[]; size: 'tall' | 'wide' | 'normal' }[] = [
  { title: 'Vestidor en U con luz integrada', place: 'Vestidores', photos: [PHOTOS.vestidor], size: 'tall' },
  { title: 'Puertas lacadas con fresado', place: 'Puertas de interior', photos: [PHOTOS.puertasLacadas], size: 'normal' },
  { title: 'Puerta de seguridad acabado nogal', place: 'Entrada', photos: [PHOTOS.seguridad], size: 'normal' },
  { title: 'Armario empotrado clásico', place: 'Armarios', photos: [PHOTOS.armario], size: 'wide' },
]
