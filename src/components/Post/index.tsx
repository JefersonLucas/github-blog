import { PostContainer } from './styles'

interface PostProps {
	id: string
	title: string
	timeline: string
	body: string
}

export function Post({ id, title, timeline, body }: PostProps) {
	return (
		<PostContainer href={`/post/${id}`}>
			<header>
				<h2>{title}</h2>
				<span>{timeline}</span>
			</header>
			<p>{body}</p>
		</PostContainer>
	)
}
