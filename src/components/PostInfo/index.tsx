import { differenceBetweenDates } from '@/util/differenceBetweenDates'
import {
	ArrowRightSquare,
	Calendar,
	ChevronLeft,
	Github,
	MessageSquare,
} from 'lucide-react'
import { PostInfoContainer, PostInfoContent } from './styles'

interface PostInfoProps {
	html_url: string
	title: string
	login: string
	comments: number
	updated_at: string
}

export function PostInfo({
	html_url,
	title,
	login,
	comments,
	updated_at,
}: PostInfoProps) {
	return (
		<PostInfoContainer>
			<PostInfoContent>
				<header>
					<a href="/">
						<ChevronLeft />
						Voltar
					</a>
					<a href={html_url}>
						Ver no github
						<ArrowRightSquare />
					</a>
				</header>

				<h1>{title}</h1>

				<ul>
					<li>
						<Github />
						<span>{login}</span>
					</li>
					<li>
						<Calendar />
						<span>{differenceBetweenDates(updated_at)}</span>
					</li>
					<li>
						<MessageSquare />
						<span>{comments} comentários</span>
					</li>
				</ul>
			</PostInfoContent>
		</PostInfoContainer>
	)
}
