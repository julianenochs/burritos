import { Orders, mapStateToProps, mapDispatchToProps, setOrders } from './Orders/Orders';
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
  });
  
  describe('mapStateToProps', () => {
    it('should return state with a new order', () => {
      const mockState = {
        orders: [{ name: 'Juju', ingredients: ['QUESO0O0'] }]
      }
      const expected = {
        orders: [{ name: 'Juju', ingredients: ['QUESO0O0'] }]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected);
    });
  });

});