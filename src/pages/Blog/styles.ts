import styled from 'styled-components'

export const BlogContainer = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 4rem auto 0;
	padding: 0 1.5rem;
`

export const BlogFormHeader = styled.div`
	width: 864px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.75rem;

	h2 {
		color: ${({ theme }) => theme.base_subtitle};
	}

	span {
		color: ${({ theme }) => theme.base_span};
	}
`

export const PostContainer = styled.div`
	width: 864px;
	margin: 2rem auto;
	margin-top: 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	flex-direction: row;
	flex-wrap: wrap;
`
