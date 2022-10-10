
import React from 'react';

interface listProps {
    people: {
      name: string,
      age: number,
      id?: number
      url: string
      note?: string
    }[]
  }


const  List: React.FC<listProps> =({people})=> {
  
  const renderList = () => {
    return people.map((person)=> {
      return (
        <i className='List'>
            <div className='List-header'>
                <img className='List-img' src={person.url}/>
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