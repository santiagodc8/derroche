export const TELEFONO = '573147241900';

export interface Habitacion {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  price: number;
  /** Resumen corto para tarjetas */
  descripcion: string;
  /** Párrafos largos para la página de detalle */
  descripcionLarga: string[];
  /** Lista compacta para tarjetas */
  features: string[];
  /** Lista completa de amenidades para la página de detalle */
  amenidades: string[];
  cama: string;
  capacidad: string;
  /** Tarifas por duración. null = consultar por WhatsApp */
  tarifas: { horas: string; precio: number | null; nota: string }[];
  /** Todas las fotos de la habitación */
  images: string[];
  featured: boolean;
  insignia?: boolean;
}

export const habitaciones: Habitacion[] = [
  {
    slug: 'silver',
    number: '01',
    name: 'Silver',
    tagline: 'Confort esencial',
    price: 82000,
    descripcion:
      'Nuestra opción acogedora. Espacio íntimo, ambientación cálida y todo lo necesario para una escapada perfecta.',
    descripcionLarga: [
      'La Silver es nuestra invitación a desconectar sin complicaciones. Un espacio íntimo y cálido, pensado para quienes buscan una pausa elegante sin renunciar a la comodidad.',
      'Cada detalle está dispuesto para que te sientas en casa desde el primer momento: iluminación tenue, ropa de cama fresca y la privacidad absoluta que define a Derroche.',
    ],
    features: ['Cama doble', 'Baño privado', 'TV', 'Wifi', 'Aire acondicionado'],
    amenidades: [
      'Cama doble',
      'Baño privado',
      'TV',
      'Wifi de alta velocidad',
      'Aire acondicionado',
      'Agua caliente 24/7',
      'Amenidades de aseo',
      'Parqueadero privado',
    ],
    cama: 'Cama doble',
    capacidad: '2 personas',
    tarifas: [
      { horas: '03h', precio: 82000, nota: 'Tarifa base' },
      { horas: '08h', precio: null, nota: 'Estancia extendida' },
      { horas: '12h', precio: null, nota: 'Estancia completa' },
    ],
    images: [
      '/habitaciones/silver/silver1.jpeg',
      '/habitaciones/silver/silver2.jpeg',
      '/habitaciones/silver/silver3.jpeg',
      '/habitaciones/silver/silver4.jpeg',
    ],
    featured: false,
  },
  {
    slug: 'junior',
    number: '02',
    name: 'Junior',
    tagline: 'Un paso más arriba',
    price: 87000,
    descripcion:
      'Más espacio, mejores acabados y un ambiente refinado pensado para los amantes del detalle.',
    descripcionLarga: [
      'La Junior sube el tono. Más espacio para moverte, acabados cuidados y una atmósfera refinada que premia a los amantes del detalle.',
      'Es el punto medio perfecto entre lo acogedor y lo lujoso: ideal para alargar el momento y disfrutar de una experiencia más amplia y sofisticada.',
    ],
    features: ['Cama queen', 'Baño amplio', 'Smart TV', 'Wifi', 'Aire acondicionado'],
    amenidades: [
      'Cama queen',
      'Baño amplio',
      'Smart TV',
      'Wifi de alta velocidad',
      'Aire acondicionado',
      'Agua caliente 24/7',
      'Minibar',
      'Amenidades premium',
      'Parqueadero privado',
    ],
    cama: 'Cama queen',
    capacidad: '2 personas',
    tarifas: [
      { horas: '03h', precio: 87000, nota: 'Tarifa base' },
      { horas: '08h', precio: null, nota: 'Estancia extendida' },
      { horas: '12h', precio: null, nota: 'Estancia completa' },
    ],
    images: [
      '/habitaciones/junior/junior1.jpeg',
      '/habitaciones/junior/junior2.jpeg',
      '/habitaciones/junior/junior3.jpeg',
      '/habitaciones/junior/junior4.jpeg',
      '/habitaciones/junior/junior5.jpeg',
      '/habitaciones/junior/junior6.jpeg',
    ],
    featured: false,
  },
  {
    slug: 'presidencial',
    number: '03',
    name: 'Presidencial',
    tagline: 'Lujo absoluto',
    price: 117000,
    descripcion:
      'Una experiencia premium. Diseño elevado, jacuzzi privado y ambientación pensada al milímetro.',
    descripcionLarga: [
      'Bienvenido a la experiencia premium de Derroche. La Presidencial está diseñada para impresionar: líneas elegantes, jacuzzi privado y una ambientación pensada al milímetro.',
      'Aquí cada elemento conspira a tu favor. La iluminación, las texturas y el confort se combinan para crear momentos que se quedan en la memoria.',
    ],
    features: ['Cama king', 'Jacuzzi', 'Smart TV', 'Bar', 'Aire acondicionado'],
    amenidades: [
      'Cama king',
      'Jacuzzi privado',
      'Smart TV',
      'Bar',
      'Wifi de alta velocidad',
      'Aire acondicionado',
      'Agua caliente 24/7',
      'Amenidades premium',
      'Parqueadero privado',
    ],
    cama: 'Cama king',
    capacidad: '2 personas',
    tarifas: [
      { horas: '03h', precio: 117000, nota: 'Tarifa base' },
      { horas: '08h', precio: null, nota: 'Estancia extendida' },
      { horas: '12h', precio: null, nota: 'Estancia completa' },
    ],
    images: [
      '/habitaciones/presidencial/presidencial1.jpeg',
      '/habitaciones/presidencial/presidencial2.jpeg',
      '/habitaciones/presidencial/presidencial3.jpeg',
      '/habitaciones/presidencial/presidencial4.jpeg',
      '/habitaciones/presidencial/presidencial5.jpeg',
      '/habitaciones/presidencial/presidencial6.jpeg',
    ],
    featured: true,
  },
  {
    slug: 'solarium',
    number: '04',
    name: 'Suite Solarium Plus',
    tagline: 'Lo extraordinario',
    price: 142000,
    descripcion:
      'Nuestra suite insignia. Solárium privado, jacuzzi, vista abierta y todos los lujos pensados para que no quieras irte.',
    descripcionLarga: [
      'Nuestra suite insignia. La Solarium Plus es lo extraordinario hecho habitación: solárium privado, jacuzzi y una vista abierta que invita a quedarse.',
      'Es la elección para celebraciones, escapadas especiales o simplemente para darte el lujo que mereces. Diseñada para que no quieras irte.',
    ],
    features: ['Solárium privado', 'Jacuzzi', 'Cama king premium', 'Smart TV', 'Bar', 'Aire acondicionado'],
    amenidades: [
      'Solárium privado',
      'Jacuzzi',
      'Cama king premium',
      'Smart TV',
      'Bar',
      'Wifi de alta velocidad',
      'Aire acondicionado',
      'Agua caliente 24/7',
      'Amenidades de lujo',
      'Parqueadero privado',
    ],
    cama: 'Cama king premium',
    capacidad: '2 personas',
    tarifas: [
      { horas: '03h', precio: 142000, nota: 'Tarifa base' },
      { horas: '08h', precio: null, nota: 'Estancia extendida' },
      { horas: '12h', precio: null, nota: 'Estancia completa' },
    ],
    images: [
      '/habitaciones/solarium/solarium1.jpeg',
      '/habitaciones/solarium/solarium2.jpeg',
      '/habitaciones/solarium/solarium3.jpeg',
    ],
    featured: true,
    insignia: true,
  },
];

export const fmtPrecio = (n: number) => '$' + n.toLocaleString('es-CO');

export const waReserva = (room: string) =>
  `https://wa.me/${TELEFONO}?text=` +
  encodeURIComponent(`Hola Derroche, me interesa reservar la habitación ${room}.`);
