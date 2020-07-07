import { getHeroesById, getHeroesByOwner } from '../../base/08-import-export';
import heroes from '../../data/heroes';

describe('Pruebas en 08-import-export', () => {

    test('should return a hero by given id', () => {

        const id = 1;
        const heroe = getHeroesById(id);

        const heroData = heroes.find(h => h.id === id);

        expect(heroData).toEqual(heroe);
    });

    test('should return undefined if hero does not exist', () => {

        const id = 10;
        const heroe = getHeroesById(id);

        expect(heroe).toBe(undefined);
    });

    test('should return an array of heroes by given owner', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroesData).toEqual(heroes);
    });

    test('should return an array length of 2 by Marvel owner', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
});