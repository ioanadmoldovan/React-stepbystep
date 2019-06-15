import React from 'react';

const People = ({ people, deletePerson }) => { 
    // destructuring directly inside the brackets - equivalent to const { people } = props;

    //ternary condition
    const peopleList = people.map( person => {
        return person.age > 25 ? (
            <div className="people" key={ person.id }>
                <div> Name: { person.name } </div>
                <div> Age: { person.age } </div>
                <div> Position: { person.position } </div>
                <button onClick={ ()=> { deletePerson( person.id ) }}> Delete person </button>
            </div>
        ) : null;
    })


    return(
        <div className="people-list">
            { peopleList }
        </div>
    )
}


export default People;

//if condition:
    // const peopleList = people.map( person => {
    //     if ( person.age > 25 ) {
    //         return(
    //             <div className="people" key={ person.id }>
    //                 <div> Name: { person.name } </div>
    //                 <div> Age: { person.age } </div>
    //                 <div> Position: { person.position } </div>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // })