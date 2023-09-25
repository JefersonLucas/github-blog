import { ChangeEvent } from 'react'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
	value: string
	onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void
}

export function SearchForm({ value, onChange }: SearchFormProps) {
	return (
		<SearchFormContainer>
			<input
				type="text"
				placeholder="Buscar conteúdo"
				value={value}
				onChange={onChange}
			/>
		</SearchFormContainer>
	)
}
