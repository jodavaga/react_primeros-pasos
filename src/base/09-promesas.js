import { getHeroesById } from './08-import-export';

export const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, rejected) => {

        setTimeout(() => {
            const heroe = getHeroesById(id);
            heroe ? resolve(heroe) : rejected('Heroe no encontrado');
            // resolve(heroe);
        }, 1500);
    });
}