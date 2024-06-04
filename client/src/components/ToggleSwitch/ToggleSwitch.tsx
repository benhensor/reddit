import { useState, ChangeEvent } from "react";
import styled from "styled-components";

interface ToggleSwitchProps {
  onClick: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onClick }) => {
  const [switchState, setSwitchState] = useState(true);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitchState(!switchState);
    onClick();
  }

  return (
    <StyledLabel htmlFor="checkbox" $checked={switchState}> 
      <input 
        id="checkbox" 
        type="checkbox" 
        checked={switchState}
        onChange={handleOnChange} />    
    </StyledLabel>
  );
}

export default ToggleSwitch;

const StyledLabel = styled.label<{ $checked: boolean }>`  
  cursor: pointer;  
  text-indent: -9999px;  
  width: 4rem;  
  height: 4rem;  
  background: ${({ theme, $checked }) => ($checked ? theme.colors.border :  theme.colors.buttonBackground)};  
  display: block;  
  border-radius: 50%;  
  position: relative;
  transition: .12s;
  &:after {    
    content: "";    
    position: absolute;    
    left: ${({ $checked }) => ($checked ? "3px" : "calc(55% - 10px)")};    
    top: 50%; 
    transform: translateY(-50%);   
    width: 2.5rem;    
    height: 2.5rem;    
    background: ${({ theme, $checked }) => ($checked ? theme.colors.black : theme.colors.white)};
    border-radius: 90px;    
    transition: 0.3s;  
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;