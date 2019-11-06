import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { getOrders } from '../../apiCalls';
import { bindActionCreators } from 'redux';
import { setOrders } from '../../actions';

export class Orders extends Component {
  constructor(props) {
    super();
    this.props = props
  }

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    const orderEls = this.props.orders.map(order => {
      return (
        <div className="order">
        <h3>{order.name}</h3>
        <ul key={Date.now()}className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={Date.now()} >{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });
    return (
      <section>
        { orderEls.length ? orderEls : <p>No orders yet!</p> }
      </section>
    )
  }
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);