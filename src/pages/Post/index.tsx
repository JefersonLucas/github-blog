import { Cover } from '@/components/Cover'
import { PostInfo } from '@/components/PostInfo'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import { PostContainer } from './styles'

interface PostProps {
	user: { login: string }
	html_url: string
	title: string
	comments: number
	updated_at: string
	body: string
}

export function Post() {
	const { id } = useParams()
	const [post, setPost] = useState<PostProps | null>(null)

	useEffect(() => {
		api
			.get(`/repos/JefersonLucas/github-blog/issues/${id}`)
			.then((response) => setPost(response.data))
	}, [id])

	if (!post) return null

	return (
		<div>
			<Cover />

			<PostInfo login={post.user.login} {...post} />

			<PostContainer>
				<ReactMarkdown children={post.body} />
			</PostContainer>
		</div>
	)
}
