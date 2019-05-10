import React from 'react'
import Person from '../Person'
const persons = (props) => (
  props.persons.map((person, index) => {
    return person.show ? 
    <Person 
    key={index} 
    name={person.name} 
    age={person.age} 
    click={() => props.clicked(index)}
    changed={(event) => props.changed(event, index)}
    /> : null
  })
)

export default persons;