import React, { Component } from 'react';
import './App.css';
import Orders from '../../../components/Orders/Orders';

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <main className="App">
        <h1>Burrito Builder</h1>

        <Orders burritos={this.props.burritos}/>
      </main>
    );
  }
}

export default App;

// Right now the App component is connected to the store.
// While sometime it can be good to have App know about everything, 
// in this case the developer team said that it's not necessary. 
// This is a common refactor!

// Remove Redux from the App component and move that functionality to the Orders component.
// Make App into a functional component, and bring in the burrito orders directly into 
// the Orders component instead.