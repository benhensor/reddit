import React from 'react'
import styled from 'styled-components'

const HomePage: React.FC = () => { 
  return (
    <Home>
      <h1>Home!</h1>
    </Home>
  )
}; 
export default HomePage;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.textParapraph};
  font-family: 'Roboto', sans-serif;
  h1 {
    margin-bottom: 1rem;
  }
  button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.logoRed};
    font-size: inherit;
    cursor: pointer;
  }
`