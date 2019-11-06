import * as actions from './index';

describe('Orders', () => {
  let orders, order
  beforeEach(() => {
    orders = [{name: 'Juju', ingredients: ['QUESOOOOOoOOO']}],
    order = [{ name: 'Juju', ingredients: ['QUESOOOOOoOOO'] }]
  })
  it('should should have a type of SET_ORDERS', () => {
    const expectedAction = {
      type: 'SET_ORDERS',
      orders
    }
    const result = actions.setOrders(orders);
    expect(result).toEqual(expectedAction)
  });

  it('should should have a type of ADD_ORDER', () => {
    const expectedAction = {
      type: 'ADD_ORDER',
      order
    }
    const result = actions.addNewOrder(orders);
    expect(result).toEqual(expectedAction)
  });
});
