import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'Flo', age: 33 },
      { id: 'p2', name: 'Candy', age: 32 },
      { id: 'p3', name: 'Abby', age: 4 }
    ],
    otherState: "Some other value",
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // Create a copy to avoid changing the original array because arrays are reference types
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              myClick={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
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
