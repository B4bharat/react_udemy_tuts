import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  sayHello(name) {
    return 'Hello ' + name;
  }

  render() {
    const myName = 'Bharat';
    return (
      <div className="App">
        <h2>Just some sample data: {this.sayHello(myName)}</h2>
      </div>
    );
  }
}

export default App;
