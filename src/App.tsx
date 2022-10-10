
import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import AddList from './components/AddList';

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

  const [people, setPeople] = useState<ofState['people']>([
    {
      name: 'Steve Jobs',
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuJs_eD_YYejFPtXMkp_WhRW41Xz0DSlxtmImgsOq5hUMjDJ1',
      age: 44,
      note: 'So far the best team player in the University'
    },
    {
      name: 'John Nideas',
      url:'https://static01.nyt.com/images/2022/07/11/sports/11jake-paul/merlin_201565503_f29e8366-36d5-4ac8-9171-203ba0cba076-superJumbo.jpg?quality=75&auto=webp',
      age: 51,
      note: 'He is the best team leader in the basketball club'
  }
  ])



  return (
    <div className="App">
      <h1> People which are invited to school event.</h1>
      <List people={people}/>
      <AddList/>
    </div>
  );
}

export default App;
