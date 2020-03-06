import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'Flo', age: 33 },
      { id: 'p2', name: 'Candy', age: 32 },
      { id: 'p3', name: 'Abby', age: 4 }
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

    this.setState((prevState, props) => { 
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
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

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />;
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({showCockpit: false}); }}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons} 
          clicked={this.togglePersonsHandler}
          login={this.loginHandler} /> : null
        }
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
