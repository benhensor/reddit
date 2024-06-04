import React from 'react'
import styled from 'styled-components'

interface LoginButtonProps {
  onClick: () => void;
}

const Avatar: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
      <AvatarButton>
        Login
      </AvatarButton>
  );
}

export default Avatar;

const AvatarButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.textParagraph};
  background-color: ${({ theme }) => theme.colors.logoRed};
  color: ${({ theme }) => theme.colors.textHeading};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.logoRedHover};
  }
`