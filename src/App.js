import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState('0')
  
  const openDetails = id => {
    setCurrentCharacterId(id)
  }

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res.data)
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []
  
  )

  return (
    <div className="App">
      <h1 className="Header">STAR WARS CHARACTERS</h1>
      {
        characters.map((char) => {
          return <div
                    key={char.id} 
                    info={char} 
                    action={openDetails} 
                    />
        })
      }
      {
        currentCharacterId && <div characterId={currentCharacterId} close={closeDetails}/>
      }
    </div>
  );
}

export default App;
