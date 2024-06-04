import React from 'react'
import styled from 'styled-components'

export default function SearchIcon() {
	return (
		<Icon>
			<svg
				viewBox="0 0 24 24"
			>
				<path d="m0 0h24v24h-24z" fill="currentColor" opacity="0" />
				<path
					d="m20.71 19.29-3.4-3.39a7.92 7.92 0 0 0 1.69-4.9 8 8 0 1 0 -8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-15.71-8.29a6 6 0 1 1 6 6 6 6 0 0 1 -6-6z"
					fill="currentColor"
				/>
			</svg>
		</Icon>
	)
}

const Icon = styled.svg`
  position: absolute;
  left: 1rem;
  fill: currentColor;
  stroke: ${({ theme }) => theme.colors.textParagraph};
  stroke-width: 0px;
  width: 2.4rem;
	height: 2.4rem;
`