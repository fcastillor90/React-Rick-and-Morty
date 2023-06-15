import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/MiApi';
import Pagi from "./components/pag";


function App() {

  const[characters, setCharacters] = useState([]);
  const[info,setInfo] = useState ({});

    const initialUrl = "https://rickandmortyapi.com/api/character"

    const fetchCharacters = (url) => {
      fetch(url)
.then(response => response.json())
.then((data) => {setCharacters(data.results);
                setInfo(data.info);
})
.catch((error) => console.log(error))
  };

  const onAnt = () => {
    fetchCharacters(info.prev);
  }

  const onSig = () => {
    fetchCharacters(info.next);
  }

  useEffect(()=> {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
    <Navbar brand="Rick and Morty"/>

    <div className='container mt-5 '> 
      <Pagi prev={info.prev} next={info.next} onAnt={onAnt} onSig={onSig}/>
      <Characters characters={characters} />
      <Pagi prev={info.prev} next={info.next} onAnt={onAnt} onSig={onSig}/>
    </div>
    </>
  )

}

export default App;
