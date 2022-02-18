import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const StyledDetails = styled.div`
    
    p {
        color: ${props => props.theme.primaryColor};
        text-shadow: 1px 1px 5px #fff;
    }
    h2 {
        color: ${props => props.theme.primaryColor};
        text-shadow: 1px 1px 5px #fff;
    }
`
// const dummyData = {
//     birth_year: "19BBY",
//     gender: "male",
//     name: "Luke Skywalker"
// }

export default function Details(props) {
    const { characterId, close } = props
    const [details, setDetails] = useState()
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
        .then(res => { 
            console.log(res.data)
            setDetails(res.data) 
        })
        .catch(err => { debugger }) // eslint-disable-line
    }, [characterId])
  
    return (
      <StyledDetails className='container'>
        <h2>Details:</h2>
        {/* {details.map(char => {
            return (
                <div>
                    <p>Name: {char.name}</p>
                    <p>Gender: {char.gender}</p>
                    <p>Birth Year: {char.birth_year}</p>
                </div>
            )
        })} */}
        {
          details &&
          <>
            <p>Name: {details.name}</p>
            <p>Gender: {details.gender}</p>
            <p>Birth Year: {details.birth_year}</p>
            {/* Films:  */}
            {/* <ul>
                {
                   details.films.map((film, idx) => <li key={idx}>{film}</li>) 
                }
            </ul> */}
            
            
          </>
        }
        <button onClick={close}>Close</button>
      </StyledDetails>
    )
  }