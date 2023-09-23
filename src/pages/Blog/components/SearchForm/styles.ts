import styled from 'styled-components'

export const SearchFormContainer = styled.form`
	width: 864px;
	margin: 0 auto;
	display: flex;

	input {
		flex: 1;
		border-radius: 6px;
		border: 0;
		background: ${({ theme }) => theme.base_input};
		color: ${({ theme }) => theme.base_text};
		padding: 1rem;
		transition: 0.3s;

		&::placeholder {
			color: ${({ theme }) => theme.base_label};
		}
	}
`
