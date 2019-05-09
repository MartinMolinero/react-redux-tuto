import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
      {
        name: 'Barney', age: -4
      },
      {
        name: 'Arnold', age: -1
      },
      {
        name: 'Tom', age: -0
      }
      ],
      other: 0
    }
  );
  const switchName = (newName) => {
    setPersonsState({persons: [
      {
        name: newName, age: 40
      },
      {
        name: 'Arnold', age: 11
      },
      {
        name: 'Tom', age: 7
      }
    ]})
  }


  const nameChanged = (event) => {
    setPersonsState(
      {
        persons : [
          {name: 'max', age: 90},
          {name: event.target.value, age: 90},
          {name: 'max', age: 90}
        ]
      }
    )
  }
    return (
      <div className="App">
      <h1>Hi wwwweee</h1>
      <button onClick={() => switchName('Hey')}>Switch name</button>
      {
        personsState.persons.map(person => {
          return(
          <Person
            name={person.name} 
            age={person.age}
            click={switchName.bind(this,'Ye')}
            changed={nameChanged}
          >
            My Hobbies: Eating babies
          </Person>)
        })
      }
      </div>
      
    )
}


export default app;

