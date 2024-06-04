import React from 'react'
import styled from 'styled-components'

const MenuIcon: React.FC = () => {
	return (
		<Menu
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				d="M3 12H21"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 6H21"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 18H21"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Menu>
	)
}

export default MenuIcon

const Menu = styled.svg`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    fill: none;
    stroke: ${({ theme }) => theme.colors.textParagraph};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    cursor: pointer;
  }
`
