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

	h2 {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	p {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	ul {
		margin-left: 1rem;
	}
`
