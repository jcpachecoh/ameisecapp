import hombre1_1 from '../../public/assets/photos/hombre1_1.jpg';
import hombre1_2 from '../../public/assets/photos/hombre1_2.jpg';
import hombre2_1 from '../../public/assets/photos/hombre2_1.jpg';
import hombre2_2 from '../../public/assets/photos/hombre2_2.jpg';
import hombre3_1 from '../../public/assets/photos/hombre3_1.jpg';
import hombre3_2 from '../../public/assets/photos/hombre3_2.jpg';
import bufanda from '../../public/assets/photos/bufanda.jpeg';
import bufanda_1 from '../../public/assets/photos/bufanda_1.jpeg';
/* dotaciones */
import saco_cuello_v1 from '../../public/assets/photos/dotaciones/saco_cuello_v1.jpg';
import saco_cuello_v2 from '../../public/assets/photos/dotaciones/saco_cuello_v2.jpg';
import saco_cuello_v3 from '../../public/assets/photos/dotaciones/saco_cuello_v3.jpg';
import saco_dotacion_abierto_1 from '../../public/assets/photos/dotaciones/saco_dotacion_abierto_1.jpg';
import saco_dotacion_abierto_3 from '../../public/assets/photos/dotaciones/saco_dotacion_abierto_2.jpg';
import saco_dotacion_abierto_2 from '../../public/assets/photos/dotaciones/saco_dotacion_abierto_3.jpg';
import saco_dotacion_abierto_4 from '../../public/assets/photos/dotaciones/saco_dotacion_abierto_4.jpeg';
import guantes_acrilico_1 from '../../public/assets/photos/dotaciones/guantes_acrilico_1.jpeg';
import guantes_acrilico_2 from '../../public/assets/photos/dotaciones/guantes_acrilico_2.jpeg';
import guantes_carnaza_1 from '../../public/assets/photos/dotaciones/guantes_carnaza_1.jpeg';
import guantes_carnaza_2 from '../../public/assets/photos/dotaciones/guantes_carnaza_2.jpeg';
import medias_lana from '../../public/assets/photos/dotaciones/medias_lana.jpeg';
import pasamontanas_colores from '../../public/assets/photos/dotaciones/pasamontanas_colores.jpeg';
import pasamontanas from '../../public/assets/photos/dotaciones/pasamontanas.jpeg';

export const products = [
  /*****Dotaciones*******/
  {
    category: 'dotaciones',
    colors: [
      {
        color: 'Negro',
        colorHexa: '#000',
      },
      {
        color: 'Blanco',
        colorHexa: '#fff',
      },
      {
        color: 'Rojo',
        colorHexa: '#FF4105',
      },
      {
        color: 'Azul Rey',
        colorHexa: '#000',
      },
      {
        color: 'Amarillo',
        colorHexa: '#ffdb00',
      },
    ],
    description: 'Saco Cuello V lana algodón 65% y poliéster 35% Unisex',
    gender: 'unisex',
    id: 1,
    images: [
      {
        name: 'Saco Cuello V 1',
        src: saco_cuello_v1,
      },
      {
        name: 'Saco Cuello V 3',
        src: saco_cuello_v2,
      },
      {
        name: 'Saco Cuello V 3',
        src: saco_cuello_v3,
      },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Saco cuello V Unisex ',
    price: 39500,
  },
  {
    category: 'dotaciones',
    colors: [
      {
        color: 'Negro',
        colorHexa: '#000',
      },
      {
        color: 'Blanco',
        colorHexa: '#fff',
      },
      {
        color: 'Rojo',
        colorHexa: '#FF4105',
      },
      {
        color: 'Azul Rey',
        colorHexa: '#000',
      },
      {
        color: 'Amarillo',
        colorHexa: '#ffdb00',
      },
    ],
    description: 'Saco Abierto acrilico 100% Unisex',
    gender: 'unisex',
    id: 2,
    images: [
      {
        name: 'Saco Abierto V 4',
        src: saco_dotacion_abierto_4,
      },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Saco Abierto Hombre ',
    price: 46500,
  },
  {
    category: 'dotaciones',
    colors: [
      {
        color: 'Negro',
        colorHexa: '#000',
      },
      {
        color: 'Blanco',
        colorHexa: '#fff',
      },
      {
        color: 'Rojo',
        colorHexa: '#FF4105',
      },
      {
        color: 'Azul Rey',
        colorHexa: '#000',
      },
      {
        color: 'Amarillo',
        colorHexa: '#ffdb00',
      },
    ],
    description: 'Guantes en lana acrilico 100% cuarto frio',
    gender: 'unisex',
    id: 3,
    images: [
      {
        name: 'Guantes en lana acrilico v1',
        src: guantes_acrilico_1,
      },
      {
        name: 'Guantes en lana acrilico v2',
        src: guantes_acrilico_2,
      },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Guantes para cuarto frio',
    price: 10600,
  },
  {
    category: 'dotaciones',
    colors: [
      {
        color: 'Negro',
        colorHexa: '#000',
      },
      {
        color: 'Blanco',
        colorHexa: '#fff',
      },
      {
        color: 'Rojo',
        colorHexa: '#FF4105',
      },
      {
        color: 'Azul Rey',
        colorHexa: '#000',
      },
      {
        color: 'Amarillo',
        colorHexa: '#ffdb00',
      },
    ],
    description: 'Pasamontañas lana 100% acrilico cuarto frio',
    gender: 'unisex',
    id: 4,
    images: [
      {
        name: 'Pasamontanas',
        src: pasamontanas,
      },
      {
        name: 'Pasamontanas colores',
        src: pasamontanas_colores,
      },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Pasamontañas cuarto frio',
    price: 10600,
  },
  {
    category: 'dotaciones',
    colors: [
      {
        color: 'Negro',
        colorHexa: '#000',
      },
      {
        color: 'Blanco',
        colorHexa: '#fff',
      },
      {
        color: 'Rojo',
        colorHexa: '#FF4105',
      },
      {
        color: 'Azul Rey',
        colorHexa: '#000',
      },
      {
        color: 'Amarillo',
        colorHexa: '#ffdb00',
      },
    ],
    description: 'Guantes especial carnaza tela antifluydo guata cuarto frío',
    gender: 'unisex',
    id: 5,
    images: [
      {
        name: 'Guantes en carnaza acrilico v1',
        src: guantes_carnaza_1,
      },
      {
        name: 'Guantes en carnaza acrilico v2',
        src: guantes_carnaza_2,
      },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Guantes Carnaza ',
    price: 10600,
  },
  {
    category: 'dotaciones',
    colors: [
      {
        color: 'Negro',
        colorHexa: '#000',
      },
      {
        color: 'Blanco',
        colorHexa: '#fff',
      },
      {
        color: 'Rojo',
        colorHexa: '#FF4105',
      },
      {
        color: 'Azul Rey',
        colorHexa: '#000',
      },
      {
        color: 'Amarillo',
        colorHexa: '#ffdb00',
      },
    ],
    description: 'Medias lana acrílico 100% cuartos fríos ',
    gender: 'unisex',
    id: 6,
    images: [
      {
        name: 'Media Lana v1',
        src: medias_lana,
      },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Medias Lana Cuarto frio ',
    price: 12400,
  },
  /*************Dotaciones*******/
  /*************Hombre**********/
  {
    category: 'hombre',
    colors: [
      {
        color: 'Rojo',
        colorHexa: '#F2B49C',
      },
      {
        color: 'Verde',
        colorHexa: '#000',
      },
    ],
    description: 'Saco Abierto Hombre para toda ocasión',
    gender: 'hombre',
    id: 7,
    images: [
      { name: 'image 1', src: hombre1_1 },
      { name: 'image 2', src: hombre1_2 },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Saco abierto',
    price: 56500,
  },
  {
    category: 'hombre',
    description: 'saco rayas',
    gender: 'hombre',
    id: 8,
    images: [
      {
        name: 'image 1',
        src: hombre2_1,
      },
      {
        name: 'image 2',
        src: hombre2_2,
      },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Saco rayas',
    price: 56500,
  },
  {
    category: 'hombre',
    description: 'Chaqueta Cerrada',
    gender: 'hombre',
    id: 9,
    images: [
      {
        name: 'image 1',
        src: hombre3_1,
      },
      {
        name: 'image 2',
        src: hombre3_2,
      },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'S',
      },
      {
        quantity: 20,
        size: 'M',
      },
      {
        quantity: 20,
        size: 'L',
      },
      {
        quantity: 20,
        size: 'XL',
      },
    ],
    name: 'Chaqueta Cerrada Acrilico 100%',
    price: 56500,
  },
  {
    category: 'hombre',
    colors: [
      {
        color: 'Gris',
        colorHexa: '#888888',
      },
    ],
    description: 'Bufanda estilo cachimir, lana acrilico 100%',
    gender: 'hombre',
    id: 10,
    images: [
      { name: 'Bufanda 1', src: bufanda },
      { name: 'Bufanda 2', src: bufanda_1 },
    ],
    inventory: [
      {
        quantity: 20,
        size: 'Unica',
      },
    ],
    name: 'Bufanda en Puntada',
    price: 45000,
  },
];
