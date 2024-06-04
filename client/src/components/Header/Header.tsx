import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MenuIcon from '../../Icons/MenuIcon';
import LogoFace from '../../Icons/LogoFace';
import LogoText from '../../Icons/LogoText';
import SearchIcon from '../../Icons/SearchIcon';
import AddIcon from '../../Icons/AddIcon';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import LoginButton from '../../Icons/LoginButton';
import MoreVertIcon from '../../Icons/MoreVertIcon';

interface HeaderProps {
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = () => {
		window.location.href = `${process.env.REACT_APP_API_URL}/auth/login`
	}

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <StyledHeader>
        <Logo>
          <MenuIcon />
          <LogoFace />
          <LogoText />
        </Logo>
        <Search>
          <label htmlFor="search"></label>
          <SearchIcon />
          <span><input type="text" id="search" placeholder="Search Reddit" /></span>
        </Search>
        <UserControls>
          { !isAuthenticated ? (
            <>
              <ToggleSwitch onClick={onClick}/>
              <LoginButton onClick={handleLogin} />
            </>
          ) : (
            <>
              <CreatePost><AddIcon />Create</CreatePost>
              <ToggleSwitch onClick={onClick}/>
              <Avatar onClick={handleLogin}>Login</Avatar>
              <MoreVertIcon onClick={handleMobileMenu}/>
            </>
          )}
        </UserControls>
      </StyledHeader>
      { !isMobileMenuOpen && (
        <MobileMenu $isActive={isMobileMenuOpen}>
          <CreatePost><AddIcon />Create</CreatePost>
          <ToggleSwitch onClick={onClick}/>
          <Avatar>Logout</Avatar>
        </MobileMenu>
      )}
    </>
  )
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const Search = styled.div`
  flex: 1 1 0%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 60rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.searchBarBackground};
  margin: 0 3rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.searchBarBackgroundHover};
  }
  label {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: translateY(0);
    transition: transform 150ms ease 0s;
    width: 100%;
    padding: 1rem 0;
  }
  input {
    width: calc(100% - 8rem);
    background-color: transparent;
    border: 1px solid var(--color-grey-3);
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.searchBarText};
    text-overflow: ellipsis;
    &:focus {
      outline: 0px;
    }
  }
  @media only screen and (max-width: 1199px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 450px) {
    margin: 0 2rem;
  }
`

const UserControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const CreatePost = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textParagraph};
  border: none;
  border-radius: 2rem;
  font-size: 1.4rem;
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;
    stroke: ${({ theme }) => theme.colors.textParagraph};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.elementBackground};
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Avatar = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const MobileMenu = styled.div<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => $isActive ? '1' : '0'};
  transform: ${({ $isActive }) => $isActive ? 'translateY(0)' : 'translateY(-100%)'};
  background-color: ${({ theme }) => theme.colors.menuBackground};
  display: ${({ $isActive }) => $isActive ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`