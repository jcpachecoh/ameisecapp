import hombre1_1 from '../../public/assets/photos/hombre1_1.jpg';
import hombre1_2 from '../../public/assets/photos/hombre1_2.jpg';
import hombre2_1 from '../../public/assets/photos/hombre2_1.jpg';
import hombre2_2 from '../../public/assets/photos/hombre2_2.jpg';
import hombre3_1 from '../../public/assets/photos/hombre3_1.jpg';
import hombre3_2 from '../../public/assets/photos/hombre3_2.jpg';

import dama1_1 from '../../public/assets/photos/dama1_1.jpg';
import dama1_2 from '../../public/assets/photos/dama1_2.jpg';
import dama2_1 from '../../public/assets/photos/dama2_1.jpg';
import dama2_2 from '../../public/assets/photos/dama2_2.jpg';
import dama3_1 from '../../public/assets/photos/dama3_1.jpg';
import dama3_2 from '../../public/assets/photos/dama3_2.jpg';

export const productsMale = [
    {
        id: 1,
        price: 56500,
        name: 'Saco abierto',
        description: 'saco abierto',
        gender: 'Masculino',
        images: [
            { src: hombre1_1, name: 'image 1' },
            { src: hombre1_2, name: 'image 2' }
        ],
        inventary: [
            {
                size: 'S',
                quantity: 20
            },
            {
                size: 'M',
                quantity: 20
            },
            {
                size: 'L',
                quantity: 20
            },
            {
                size: 'XL',
                quantity: 20
            }
        ]
    },
    {
        id: 2,
        name: 'Saco rayas',
        price: 56500,
        description: 'saco rayas',
        gender: 'Masculino',
        images: [
            { src: hombre2_1, name: 'image 1' },
            { src: hombre2_2, name: 'image 2' }
        ],
        inventary: [
            {
                size: 'S',
                quantity: 20
            },
            {
                size: 'M',
                quantity: 20
            },
            {
                size: 'L',
                quantity: 20
            },
            {
                size: 'XL',
                quantity: 20
            }
        ]
    },
    {
        id: 3,
        name: 'Chaqueta Cerrada',
        price: 56500,
        description: 'Chaqueta Cerrada',
        gender: 'Masculino',
        images: [
            { src: hombre3_1, name: 'image 1' },
            { src: hombre3_2, name: 'image 2' }
        ],
        inventary: [
            {
                size: 'S',
                quantity: 20
            },
            {
                size: 'M',
                quantity: 20
            },
            {
                size: 'L',
                quantity: 20
            },
            {
                size: 'XL',
                quantity: 20
            }
        ]
    },
];

export const productsFemale = [
    {
        id: 40,
        price: 56500,
        name: 'Saco abierto',
        description: 'saco abierto',
        gender: 'Femenino',
        images: [
            { src: dama1_1, name: 'image 1' },
            { src: dama1_2, name: 'image 2' }
        ],
        inventary: [
            {
                size: 'S',
                quantity: 20
            },
            {
                size: 'M',
                quantity: 20
            },
            {
                size: 'L',
                quantity: 20
            },
            {
                size: 'XL',
                quantity: 20
            }
        ]
    },
    {
        id: 41,
        name: 'Saco rayas',
        price: 56500,
        description: 'saco rayas',
        gender: 'Femenino',
        images: [
            { src: dama2_1, name: 'image 1' },
            { src: dama2_2, name: 'image 2' }
        ],
        inventary: [
            {
                size: 'S',
                quantity: 20
            },
            {
                size: 'M',
                quantity: 20
            },
            {
                size: 'L',
                quantity: 20
            },
            {
                size: 'XL',
                quantity: 20
            }
        ]
    },
    {
        id: 42,
        name: 'Chaqueta Cerrada',
        price: 56500,
        description: 'Chaqueta Cerrada',
        gender: 'Femenino',
        images: [
            { src: dama3_1, name: 'image 1' },
            { src: dama3_2, name: 'image 2' }
        ],
        inventary: [
            {
                size: 'S',
                quantity: 20
            },
            {
                size: 'M',
                quantity: 20
            },
            {
                size: 'L',
                quantity: 20
            },
            {
                size: 'XL',
                quantity: 20
            }
        ]
    },
]