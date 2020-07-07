import { getRandomGif } from '../../base/11-async-await';

describe('Pruebas Async en 11-async-await', () => {


    test('Should return a gif URL async', async () => {
        
        const url = await getRandomGif();
        // console.log(url);

        expect(typeof url).toBe('string');
        expect(url.includes('https://media')).toBe(true);
    });
})