
import React from 'react';
import {ofState as Props} from '../App';

interface IProps {
  people: Props['people']
}

const  List: React.FC<IProps> =({people})=> {
  
  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      return (
        <i className='List'>
            <div className='List-header'>
                <img className='List-img' src={person.img}/>
                <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className='List-note'>{person.note}</p>
        </i>
      )
    })
  }
  return (
   <ul>
     {renderList()}
   </ul>
  )
}

export default List