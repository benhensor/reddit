import React from 'react'
import styled from 'styled-components'

const Add: React.FC = () => {
  return (
      <AddIcon
        width="24px"
        height="24px"
        viewBox="0 0 70 70"
      >
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
        />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
        />
      </AddIcon>
  );
}

export default Add;

const AddIcon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.textParagraph};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 4px;
`