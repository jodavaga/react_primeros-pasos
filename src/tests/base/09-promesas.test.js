import { getHeroesByIdAsync } from '../../base/09-promesas';
import { getHeroesById } from '../../base/08-import-export';

describe('Pruebas en 09-Promesas', () => {

    test('Should return a heroe as a promise', (done) => {

        const id = 1;
        const heroeData = getHeroesById(id);
        getHeroesByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroeData);
                done();  
            });
    });

    test('Should return error if does not exist', (done) => {

        const id = 10;
        const heroeData = getHeroesById(id);
        getHeroesByIdAsync(id)
            .catch(err => {
                expect(err).toBe('Heroe no encontrado');
                done();  
            });
    });
})