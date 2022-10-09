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


const  Lists = (props: listProps)=> {
  return (
    <div>Lists</div>
  )
}

export default Lists