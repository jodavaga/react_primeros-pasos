import React from 'react';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


describe('<CounterApp /> tests', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach(() => {
        wrapper = shallow( <CounterApp /> );
    });

    test('Should render <CounterApp /> as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should render <CounterApp /> with value 100', () => {

        const valor = 100;
        const wrapper = shallow( <CounterApp value={valor}/> );

        const valorTag = wrapper.find('h4').text();

        expect(valorTag).toBe( `${valor}` );
    });

    test('Should handle click event on addBtn', () => {

        const addBtn = wrapper.find('.addBtn');

        expect(addBtn.length).toEqual(1);
        // before click
        // console.log(wrapper.find('h4').text());
        addBtn.simulate('click');
        // after
        expect(wrapper.find('h4').text()).toEqual('11');
    });

    test('Should handle click event on Substaction', () => {

        // counter should be resetted (beforeEach), if not test will fail, counter is 11.
        const btn = wrapper.find('.substractBtn');

        expect(btn.length).toEqual(1);

        btn.simulate('click');
        expect(wrapper.find('h4').text()).toEqual('9');
    });

    test('Should Reset counter', () => {

        const btn = wrapper.find('.addBtn');

        expect(btn.length).toEqual(1);
        btn.simulate('click');

        // find reset button by index
        wrapper.find('button').at(1).simulate('click');

        console.log( wrapper.find('button').at(1).html() );

        expect(wrapper.find('h4').text()).toEqual('10');
    });


})