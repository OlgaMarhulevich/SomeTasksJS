import React from 'react';
import { User } from './06/06';
import './App.css';

function App() {
  const people = [
    {id: 1, name: "John Smith", age: 23},
    {id: 2, name: "Ann Noth", age: 18},
  ]

  const LiElement = people.map(man => <li key={man.id}>{man.name}</li>)
  return <ul>
    {/*{LiElement}*/}
    <User/>
  </ul>
}

export default App;
