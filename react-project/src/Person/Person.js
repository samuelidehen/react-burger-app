import React from "react";
import classes from "../App.css";

function Person(props) {
  return (
    <div className={classes.Person}>
      <p>
        I am a {props.name} and I am {props.age} years old !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
}
export default Person;
