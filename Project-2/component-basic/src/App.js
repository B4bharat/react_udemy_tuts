import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.yourname = 'ammy';
    this.state = {};
  }

  sayHello(name) {
    return `Hello ${name}`;
  }

  render() {
    return (
      <div className="App">
        <h2>Just some sample data: {this.yourname} </h2>
      </div>
    );
  }
}

export default App;
