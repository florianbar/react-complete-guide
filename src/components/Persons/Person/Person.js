import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log("[Person.js] rendering...");

        return <Fragment>
            <p onClick={this.props.myClick}>
                I'm {this.props.name} and I am {this.props.age} years old.
            </p>
            <p>{this.props.children}</p>
            <input
                //ref={(el) => {this.inputElement = el}}
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changeName} 
                value={this.props.name} 
            />
        </Fragment>;
    }
};

Person.propTypes = {
    myClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeName: PropTypes.func
};

export default withClass(Person, classes.Person);