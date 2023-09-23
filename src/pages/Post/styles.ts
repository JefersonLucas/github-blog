import styled from 'styled-components'

export const PostContainer = styled.div`
	width: 864px;
	margin: 0 auto;
	padding: 2.5rem 2rem;

	img {
		width: 100%;
	}

	a {
		color: ${({ theme }) => theme.blue};
	}
`
