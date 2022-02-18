import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function Details(props) {
    const { characterId, close } = props
    const [details, setDetails] = useState(null)
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
        .then(res => { 
            console.log(res.data)
            setDetails(res.data) 
        })
        .catch(err => { debugger }) // eslint-disable-line
    }, [characterId])
  
    return (
      <div className='container'>
        <h2>Details:</h2>
        {
          details &&
          <>
            <p>Name: {details.name}</p>
            <p>Gender: {details.gender}</p>
            <p>Films: {details.films}</p>
            <p>Birth Year: {details.birth_year}</p>
          </>
        }
        <button onClick={close}>Close</button>
      </div>
    )
  }