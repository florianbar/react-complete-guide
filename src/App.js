import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Flo', age: 33 },
      { name: 'Candy', age: 32 },
      { name: 'Abby', age: 4 }
    ],
    otherState: "Some other value"
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked");
    this.setState({ 
      persons: [
        { name: newName, age: 33 },
        { name: 'Candice', age: 32 },
        { name: 'Abby', age: 5 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, "Florian")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          myClick={this.switchNameHandler.bind(this, "Flo!")}>
            I like Korean dramas!
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
