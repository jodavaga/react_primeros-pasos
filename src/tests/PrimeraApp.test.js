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
    
})