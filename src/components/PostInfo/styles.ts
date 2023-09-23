import styled from 'styled-components'

export const PostInfoContainer = styled.div`
	width: 864px;
	max-width: 1120px;
	height: 212px;
	margin: 0 auto;
	margin-top: -5rem;
`

export const PostInfoContent = styled.header`
	background: ${({ theme }) => theme.base_profile};
	box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	header {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;

		a {
			display: flex;
			align-items: center;
			text-decoration: none;
			gap: 0.5rem;
			color: ${({ theme }) => theme.blue};
		}
	}

	h1 {
		flex: 1;
		font-size: 24px;
		color: ${({ theme }) => theme.base_title};
	}

	ul {
		display: flex;
		align-items: center;
		list-style: none;
		gap: 1.5rem;
	}

	li {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 0.5rem;

		span {
			display: inline;
		}

		svg {
			height: 18px;
			width: 18px;
			color: ${({ theme }) => theme.base_label};
		}
	}
`
