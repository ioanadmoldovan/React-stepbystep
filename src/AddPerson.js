import React, { Component } from 'react'; 
// need to store the data the user is submitting => container component

class AddPerson extends Component {
    
    state = {
        name: null,
        age: null,
        position: null
    } 

    handleChange = (e) => {
        return (
            this.setState({
                [ e.target.id ]: e.target.value // [ e.target.id] == person['name']
            })
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state);
    }
    
    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>

                    <label htmlFor="name"> Name: </label>
                    <input type="text" id="name" onChange={ this.handleChange } />
                    
                    <label htmlFor="age"> Age: </label>
                    <input type="text" id="age" onChange={ this.handleChange } />

                    <label htmlFor="position"> Position: </label> 
                    <input type="text" id="position" onChange={ this.handleChange } />

                    <button> Submit </button>

                </form>
            </div>
        )
    }
}

export default AddPerson;