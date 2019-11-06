import { Orders } from './Orders/Orders';
import { shallow } from 'enzyme';
import React from 'react';

describe('Orders', () => {
  let wrapper;
  let orders = [{name: 'Juju', ingredients: ['QUESOOoOoOo']}]
  beforeEach(() => {
    wrapper = shallow(<Orders orders={orders}/>)
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});