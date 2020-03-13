import React from "react";
import Person from "./Person/Person";

const Persons = props =>
  props.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => props.nameChanged(event.person)}
      />
    );
  });

export default Persons;
