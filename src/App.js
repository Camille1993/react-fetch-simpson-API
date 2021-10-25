import logo from './logo.svg';
import './App.css';
import DisplayQuotes from './components/DisplayQuotes';
import { useState } from 'react';
import axios from 'axios';

const sampleSimpson = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"  
}

function App() {
  const [character, setcharacter] = useState(sampleSimpson);
  const getSimpson = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      console.log(data)
      setcharacter(data[0]);
    });
  };
  return (
    <div className='App'>
      <button type='button' onClick={getSimpson}>Retrieve quote</button>
      <DisplayQuotes simpson={character} />
    </div>
  );
}

export default App;
