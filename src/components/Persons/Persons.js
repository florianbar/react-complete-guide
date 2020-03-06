import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log("[Persons.js] componentWillReceiveProps", props);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[Persons.js] shouldComponentUpdate");
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return { message: "Snapshot!" };
    }

    // Most used method. When fetching new data from server.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
    }

    // Code that runs before the components gets removed
    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount");
    }

    render() {
        console.log("[Persons.js] rendering...");

        const persons = this.props.persons.map((person, index) => {
            return <Person 
                key={person.id}
                myClick={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changeName={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated} />
        });

        return persons;
    }
}

export default Persons;