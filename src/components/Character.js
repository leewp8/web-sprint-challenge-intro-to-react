import React from 'react';
// import styled, {keyframes} from 'styled-components';

// Write your Character component here

export default function Character({ info, action }) {
    return (
        <div className='character'>
            {info.name}
            <button onClick={() => action(info.id)}>
                Learn more
            </button>
        </div>
    )
}