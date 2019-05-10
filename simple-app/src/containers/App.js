import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Person/Person/Persons'

class App extends Component {
  state = {
    persons: [
      {
        name: 'me', age: 23, show: true
      },
      {
        name: 'my mom', age: 90, show: true
      }
    ]
  }

  deletePerson = (personId) => {
    /* 
    Regresar una copia del array
    del estado para no manipularlo 
    directamente, después setearlo
    */
    const persons = [...this.state.persons];
    persons.splice(personId, 1);
    this.setState({persons: persons});
  }

  changeName = (event, id) => {
    const persons = [...this.state.persons];
    persons[id].name = event.target.value;
    this.setState({persons: persons});
  }


  render() {
    let persons = (
      <Persons 
      persons={this.state.persons} 
      clicked={this.deletePerson}
      changed={this.changeName}
      />
    );
    return (
      <div className="App">
        <h1>Hey</h1>
        <p>Working</p>
        {
          persons
        }
      </div>
    )
  }
}

export default App
