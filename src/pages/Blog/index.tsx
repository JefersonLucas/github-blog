import { Cover } from '@/components/Cover'
import { Post } from '@/components/Post'
import { Profile } from '@/components/Profile'
import { api } from '@/lib/axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, BlogFormHeader, PostContainer } from './styles'

interface PostProps {
	id: string
	number: string
	title: string
	created_at: string
	body: string
}

export function Blog() {
	const [posts, setPosts] = useState<PostProps[] | null>(null)
	const [text, setText] = useState<string>('')

	useEffect(() => {
		if (!text) {
			api
				.get('/repos/JefersonLucas/github-blog/issues')
				.then((response) => setPosts(response.data))
		} else {
			api
				.get(`/search/issues?q=${text}%20repo:JefersonLucas/github-blog`)
				.then((response) => setPosts(response.data.items))
		}
	}, [text])

	if (!posts) return null

	return (
		<div>
			<Cover />
			<Profile />

			<BlogContainer>
				<BlogFormHeader>
					<h2>Publicações</h2>
					<span>{posts.length} publicações</span>
				</BlogFormHeader>

				<SearchForm
					value={text}
					onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
						setText(target.value)
					}
				/>

				<PostContainer>
					{posts.map((post) => (
						<Post key={post.number} {...post} />
					))}
				</PostContainer>
			</BlogContainer>
		</div>
	)
}
