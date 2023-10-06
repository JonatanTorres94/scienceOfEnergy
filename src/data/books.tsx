import { BooksItems } from "../interfaces/interfaces";

export const BooksVM: BooksItems[] = [
    {
        name: 'Sintesis de las tres montañas',
        cover: require('../images/book01.png')
    },
    {
        name: 'Orientando Al Discipulo',
        cover: require('../images/book02.png')
    },
    {
        name: 'El Águila Rebelde',
        cover: require('../images/book03.png'),
        description: 'Había dicho yo, en la “Síntesis de las Tres Montañas”, que no iba a escribir más, porque la gente lee y no sabe estudiar, pero viéndome en la necesidad, por un libro que sacaron en El  Salvador, un libro que da horror verlo, me veo obligado a sacar este libro, para orientar y desaprobar totalmente ese otro libro que causa angustia ver los errores u horrores que sacaron en ese libro.'
    },
    {
        name: 'Sí: Hay infierno, Diablo y Karma',
        cover: require('../images/book04.png')
    }
]