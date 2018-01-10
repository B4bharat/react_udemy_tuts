import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
// import Intro from "./Intro";

class Intro extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p> Hey </p>
        <Intro />
      </div>
    );
  }
}

export default App;
