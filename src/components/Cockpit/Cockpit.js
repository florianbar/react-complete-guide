import React, { useEffect } from "react";

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        // Http request...
        setTimeout(() => {
            alert("Saved data to cloud!");
        }, 1000);
    }, []); // add empty array to only run useEffect once

    const assignedClasses = [];
    let btnClass = [classes.Button];
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button 
                className={btnClass.join(" ")} 
                onClick={props.clicked}>
                Switch Name
            </button>
        </div>
    );
};

export default cockpit;