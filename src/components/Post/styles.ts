import styled from 'styled-components'

export const PostContainer = styled.a`
	width: 416px;
	height: 256px;
	padding: 2rem;

	text-decoration: none;
	color: ${({ theme }) => theme.base_text};

	border-radius: 0.625rem;

	background-color: ${({ theme }) => theme.base_post};

	header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.25rem;

		h2 {
			flex-wrap: wrap;
			font-size: 20px;
			color: ${({ theme }) => theme.base_subtitle};
		}

		span {
			font-size: 14px;
			color: ${({ theme }) => theme.base_span};
			white-space: nowrap;
		}
	}

	p {
		height: 112px;
		overflow: hidden;
	}
`
