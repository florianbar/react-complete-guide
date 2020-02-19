import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons';

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

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ 
      persons: persons
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
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons} 
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
