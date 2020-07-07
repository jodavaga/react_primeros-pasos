import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Primera App tests', () => {

    test('Should display saludo: "Hola, soy jose"', () => {

        const mensaje = 'Hola, soy jose';

        const {getByText} = render( <PrimeraApp saludo={ mensaje } /> );

        expect(getByText(mensaje)).toBeInTheDocument();

    })
})