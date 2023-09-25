import { differenceBetweenDates } from '@/util/differenceBetweenDates'
import { PostContainer } from './styles'

interface PostProps {
	id: string
	number: string
	title: string
	created_at: string
	body: string
}

export function Post({ id, number, title, created_at, body }: PostProps) {
	return (
		<PostContainer href={`/post/${number}`} id={id}>
			<header>
				<h2>{title}</h2>

				<span>{differenceBetweenDates(created_at)}</span>
			</header>

			<p>{body}</p>
		</PostContainer>
	)
}
