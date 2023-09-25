import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function differenceBetweenDates(data: string): string | null {
	const dateSelected = new Date(data)

	if (isNaN(dateSelected.getTime())) {
		return "Formato de data inválido. Use o formato 'YYYY-MM-DD'."
	}

	const difference = formatDistanceToNow(dateSelected, {
		addSuffix: true,
		locale: ptBR,
	})

	return difference
}
