import {
	ArrowRightSquare,
	Calendar,
	ChevronLeft,
	Github,
	MessageSquare,
} from 'lucide-react'
import { PostInfoContainer, PostInfoContent } from './styles'

export function PostInfo() {
	return (
		<PostInfoContainer>
			<PostInfoContent>
				<header>
					<a href="/">
						<ChevronLeft />
						Voltar
					</a>
					<a href="">
						Ver no github
						<ArrowRightSquare />
					</a>
				</header>

				<h1>JavaScript data types and data structures</h1>

				<ul>
					<li>
						<Github />
						<span>JefersonLucas</span>
					</li>
					<li>
						<Calendar />
						<span>Há 1 dia</span>
					</li>
					<li>
						<MessageSquare />
						<span>5 comentários</span>
					</li>
				</ul>
			</PostInfoContent>
		</PostInfoContainer>
	)
}
