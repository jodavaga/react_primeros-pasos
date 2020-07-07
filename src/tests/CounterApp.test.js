import React from 'react';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


describe('CounterApp tests', () => {

    test('Should render <CounterApp /> as expected', () => {

        const wrapper = shallow( <CounterApp /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Should render <CounterApp /> with value 100', () => {

        const valor = 100;
        const wrapper = shallow( <CounterApp value={valor}/> );

        const valorTag = wrapper.find('h4').text();
        console.log(valorTag);

        expect(valorTag).toBe( `${valor}` );
    });
})