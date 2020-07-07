import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Primera App tests', () => {

    // test('Should display saludo: "Hola, soy jose"', () => {
    //     const mensaje = 'Hola, soy jose';

    //     const {getByText} = render( <PrimeraApp saludo={ mensaje } /> );

    //     expect(getByText(mensaje)).toBeInTheDocument();
    // });

    test('Should render <PrimeraApp /> correctly', () => {
        
        const mensaje = 'Hola, soy jose';
        const wrapper = shallow( <PrimeraApp saludo={mensaje} /> )

        expect( wrapper ).toMatchSnapshot();
    });

    test('Should display subtitle sent by props', () => {
        
        const mensaje = 'Hola, soy jose';
        const subtitle = 'Subtitulo sent by props';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={mensaje} 
                subtitulo={ subtitle }
            /> 
        );

        const textoParrafo = wrapper.find('small').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitle);
        
    });
    
})