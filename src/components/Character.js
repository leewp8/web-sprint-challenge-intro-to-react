import React from 'react';
import styled from 'styled-components';

// Write your Character component here

const StyledCharacter = styled.div`
  
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 2px solid white;

  
  color: ${pr => pr.theme.primaryColor};
  text-shadow: 1px 1px 5px #fff;

  @media ${pr => pr.theme.breakpointMobile} {
    width: initial;
  }
`
export default function Character({ info, action }) {
    return (
        <StyledCharacter className='character'>
            {info.name}
            <button onClick={() => action(info.id)}>
                Learn more
            </button>
        </StyledCharacter>
    )
}