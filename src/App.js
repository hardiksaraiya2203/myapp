import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LanguageContext from './Language/languageContext';
import NavCustom from './NavCustom';
import LanForm from './LanForm';

function App() {
  const [data, setData] = useState('en')
  return (
    <LanguageContext.Provider value={{ data, setData }}>

      <NavCustom />
      <LanForm />
    </LanguageContext.Provider >
  );
}

export default App;
