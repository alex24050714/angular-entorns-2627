export interface ProducteLab{
    id: number;
    nom: string;
    preu: number;
    estoc: number;
    categoria: string;
    imatgeUrl: string;
}

export const PRODUCTES_LAB: ProducteLab[] = [
    {
        id:1,
        nom: 'Portàtil ProBook 21',
        preu: 899,
        estoc:3,
        categoria: 'Informàtica',
        imatgeUrl: 'https://picsum.photos/seed/picsum/200/300'
    },
    {
        id:2,
        nom: 'Ratoli sense fil',
        preu: 24.9,
        estoc:15,
        categoria: 'Perifèrics',
        imatgeUrl: 'https://picsum.photos/seed/picsum/200/300'
    },
    {
        id:3,
        nom: 'Monitor 27',
        preu: 329,
        estoc:0,
        categoria: 'Pantalles',
        imatgeUrl: 'https://picsum.photos/seed/picsum/200/300'
    },
    {
        id:4,
        nom: 'Teclat',
        preu: 79,
        estoc:8,
        categoria: 'Perifèrics',
        imatgeUrl: 'https://picsum.photos/seed/picsum/200/300'
    },
    {
        id:5,
        nom: 'Auriculars',
        preu: 45,
        estoc:0,
        categoria: 'Àudio',
        imatgeUrl: ''
    },
]