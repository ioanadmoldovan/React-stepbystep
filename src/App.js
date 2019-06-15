import React, { Component } from 'react';
import People from './People';

class App extends Component{

  state = {
    people : [
      { name: "Ioana", age: "33", position: "intern", id :1 },
      { name: "John Doe", age: "21", position: "junior",  id: 2 },
      { name: "Mary", age: "45", position: "senior", id: 3 }
    ]
  }

  render (){
    return(
      <div className="App"> 
        <div> MY FIRST REACT APP </div>
        <p> Welcome! :) </p>
        <People people={this.state.people} />
      </div>
    )
  }
}

export default App;
