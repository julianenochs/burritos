import { orders } from './orders';
describe('orders', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = orders(undefined, {});
    expect(result).toEqual(expected);
  });

});