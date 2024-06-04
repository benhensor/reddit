import React from 'react';
import styled from 'styled-components';

const PublicHome: React.FC = () => {

  const handleLogin = () => {
		window.location.href = `${process.env.REACT_APP_API_URL}/auth/login`
	}

  return (
    <Home>
      <h1>Welcome to Reddit Viewer</h1>
      <p>Please <button onClick={handleLogin}>log in</button> to see your personalized feed.</p>
    </Home>
  );
};

export default PublicHome;

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
    &:hover {
      color: ${({ theme }) => theme.colors.logoRedHover};
    }
  }
`