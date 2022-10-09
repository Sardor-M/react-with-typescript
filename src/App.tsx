import { List } from '@material-ui/core';
import React, {useState} from 'react';
import './App.css';
import Lists from './components/Lists';

function App() {
  // const [number, setNumber] = useState<number | string | boolean>(2);

  // const changeNum = () => {
  //   setNumber('33');
  // }  
  // {
  //   name: 'Steve Jobs',
  //   url:'',
  //   age: 44,
  //   note: 'So far the best team player in the University'
  // }, 
  // {
  //   name: 'John Nideas',
  //   url:'',
  //   age: 51,
  //   note: 'He is the best team leader in the basketball club'
  // }, 

  interface ofState {
    people: {
      name: string,
      age: number,
      id?: number
      url: string
      note?: string
    }[]
  }

  const [people, setPeople] = useState<ofState['people']>([])

  people.map(person => {
    person.name
  })

  return (
    <div className="App">
      <h1> People which are invited to school event.</h1>
      <Lists people={people}/>
    </div>
  );
}

export default App;
