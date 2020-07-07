import { getHeroesByIdAsync } from '../../base/09-promesas';
import { getHeroesById } from '../../base/08-import-export';

describe('Pruebas en 09-Promesas', () => {

    test('Should return a heroe as a promise', (done) => {

        const id = 1;
        const heroeData = getHeroesById(id);
        const heroe = getHeroesByIdAsync(id);
        done();

        expect(heroe).toEqual(heroeData);


    })
})