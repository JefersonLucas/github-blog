import styled from 'styled-components'

export const CoverContainer = styled.header`
	background-color: ${({ theme }) => theme.base_profile};
`

export const CoverContent = styled.div`
	width: 100%;
	height: 296px;
	max-width: 1120px;
	margin: 0 auto;

	display: flex;
	justify-content: center;
	align-items: center;
`
