import React from 'react';

const People = ({people}) => { 
    // destructuring directly inside the brackets
    //const {people} = props;
    const peopleList = people.map( person => {
        return(
            <div className="people" key={person.id}>
                <div> Name: {person.name} </div>
                <div> Age: {person.age} </div>
                <div> Position: {person.position} </div>
            </div>
        )
    })
    return(
        <div className="people-list">
            {peopleList}
        </div>
    )
}


export default People;