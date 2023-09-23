import styled from 'styled-components'

export const ProfileContainer = styled.div`
	width: 864px;
	max-width: 1120px;
	height: 212px;
	margin: 0 auto;
	margin-top: -5rem;
`

export const ProfileContent = styled.header`
	background: ${({ theme }) => theme.base_profile};
	box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 2rem;

	display: grid;
	grid-template-columns: 140px 1fr;
	gap: 2rem;

	img {
		width: 100%;
		border-radius: 8px;
	}

	span {
		display: flex;
		margin-bottom: 0.5rem;

		a {
			display: flex;
			align-items: center;
			font-size: 12px;
			gap: 0.5rem;
			text-transform: uppercase;
			text-decoration: none;
			color: ${({ theme }) => theme.blue};

			svg {
				height: 14px;
				width: 14px;
				color: ${({ theme }) => theme.blue};
			}
		}
	}

	h1 {
		flex: 1;
		font-size: 24px;
		color: ${({ theme }) => theme.base_title};
	}

	p {
		flex: 1;
		font-size: 16px;
		color: ${({ theme }) => theme.base_text};
	}

	div {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
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
