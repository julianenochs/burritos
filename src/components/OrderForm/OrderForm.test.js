import React from 'react';
import { OrderForm } from './OrderForm';
import { shallow } from 'enzyme';
import { setNewOrder } from './OrderForm'
describe('Order Form', () => {
  let wrapper;
  let mockHandleSubmit = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<OrderForm />)
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should fire handleSubmit when the button is clicked', () => {
    let mockEvent = {
      target: {
        name: 'who cares'
      }
    }
    wrapper.find('.submit-button').simulate('click')
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an setNewOrder action when handleSubmit is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setNewOrder({ name: 'Juju', ingredients: ['QUES000000'] })
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handleSubmit({ name: 'Juju', ingredients: ['QUES000000'] })
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});