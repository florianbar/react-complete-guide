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
    otherState: "Some other value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: 33 },
        { name: 'Candice', age: 32 },
        { name: 'Abby', age: 5 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Flo', age: 33 },
        { name: event.target.value, age: 32 },
        { name: 'Abby', age: 5 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({ 
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            myClick={this.switchNameHandler.bind(this, "Flo!")}
            changeName={this.nameChangedHandler}>
              I like Korean dramas!
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
