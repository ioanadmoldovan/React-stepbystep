import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPerson';

class App extends Component{
  state = {
    people : [
      { name: "Ioana", age: "33", position: "intern", id :1 },
      { name: "John Doe", age: "21", position: "junior",  id: 2 },
      { name: "Mary", age: "45", position: "senior", id: 3 }
    ]
  }

  addPerson = ( person ) => {
    person.id=Math.random(); //automatically adding an id
    let people = [...this.state.people, person]; //making a copy of the state and adding a person so that we don't alter the initial state
    this.setState({
      people:people
    })
  }

  deletePerson = ( id ) => {
    let people = this.state.people.filter(person =>{
      return person.id !== id
      }) 
      this.setState({
        people: people
      })
    //cycles through the array, if find id then returns false => removes, else does nothing
  }

  componentDidMount(){
    console.log( 'component was mounted' );
  }

  componentDidUpdate(prevProps, prevState) { // we had before the change
    console.log( 'component was updated' );
    console.log( prevProps, prevState );
  }

  render() {
    return (
      <div className="App"> 
        <h1> MY FIRST REACT APP </h1>
        <p> Welcome :) </p>
        <People deletePerson={ this.deletePerson } people={ this.state.people } />
        <AddPerson  addPerson={ this.addPerson } />
      </div>
    )
  }
}

export default App;
