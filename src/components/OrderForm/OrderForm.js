import React, { Component } from 'react';
import Orders from '../Orders/Orders';
import { addNewOrder } from '../../actions';
import { connect } from 'react-redux';
import { addOrders } from '../../apiCalls';

class OrderForm extends Component {
  constructor() {
    super();
    // this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      id: 0
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({id: Date.now()})
    if (this.state.ingredients.length > 0) {
      this.props.setNewOrder(this.state)
      this.addNewOrder(this.state)
      this.clearInputs()
    } 
  }

  addNewOrder = order => {
    const options = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    addOrders(options)
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setNewOrder: (order) => dispatch(addNewOrder(order))
});

export default connect(null, mapDispatchToProps)(OrderForm);