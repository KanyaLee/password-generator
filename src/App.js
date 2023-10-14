import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Password from './components/Password'
import Requirement from './components/Requirement';
import PasswordLength from './components/Password-length'
import './components/PasswordGenerator.css'



function App() {
  const [characters, setCharacters] = useState('');
  const [length, setLength] = useState(20);
  return (
    <div className='big-container'>
      <div className='header-container'>
        <h1>PASSWORD GENERATOR</h1>
      </div>

      <div className='component-container'>
        <Password characters={characters} length={length} className='subset'/>
        <PasswordLength length={length} onLengthChange={setLength} className='subset' />
        <Requirement onCharactersChange={setCharacters} className='subset'/>
      </div>

    </div>
  );
}

export default App;
