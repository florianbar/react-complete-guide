import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Florian" age="33" />
        <Person name="Candice" age="32">I like Korean dramas!</Person>
        <Person name="Abby" age="4" />
      </div>
    );
  }
}

export default App;
