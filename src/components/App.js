import React from 'react';
import Header from './Header';
import Section from './Section';

const img ='foto.png';
const hobbies =['hobbie 1','hobbie 2' ,'hobbie 3'];
const text = 'cualquier texto';

const App = () => (
  <div>
    <Header/>
    <Section img={img} hobbies={hobbies} text={text}/>
  </div>
)

export default App