import React, { Component } from "react";
import styled from "styled-components";
import classes from "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  :hover {
    background-color: orange;
    color: black;
  }
`;
class App extends Component {
  state = { name: "judy", age: " 71", showPerson: false };
  switchNameHandler = () => {
    this.setState({
      name: "clint",
      age: "23"
    });
  };
  newNameHandler = e => {
    this.setState({
      name: e.target.value,
      age: "23"
    });
  };
  TooglePerson = () => {
    const showPersonVal = this.state.showPerson;
    this.setState({
      showPerson: !showPersonVal
    });
  };

  render() {
    const { showPerson } = this.state;

    // if (showPerson) {
    //   style.backgroundColor = "red";
    //   style[":hover"] = {
    //     backgroundColor: "orange",
    //     color: "black"
    //   };
    // }
    return (
      <div className={classes.App}>
        <h1>React App</h1>
        <StyledButton onClick={this.TooglePerson}>Switch names</StyledButton>
        {showPerson ? (
          <div>
            {" "}
            <Person
              name={this.state.name}
              age={this.state.age}
              changed={this.newNameHandler}
            />
            <Person name="clinton" age="23">
              {" "}
              My hobbies : I love boobs{" "}
            </Person>
            <Person name="bernard" age="24" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
