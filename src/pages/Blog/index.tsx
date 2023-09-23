import { Cover } from '@/components/Cover'
import { Post } from '@/components/Post'
import { Profile } from '@/components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, BlogFormHeader, PostContainer } from './styles'

interface PostProps {
	id: string
	title: string
	timeline: string
	body: string
}

export function Blog() {
	const posts: PostProps[] = [
		{
			id: '1',
			title: 'JavaScript data types and data structures',
			timeline: 'Há 1 dia',
			body: 'Programming languages all have built-in data structures, but these often 	differ from one language to another. This article attempts to list the 	built-in data structures available in JavaScript and what properties 	they have. These can be used to build other data structures. Wherever 	possible, comparisons with other languages are drawn.',
		},
		{
			id: '2',
			title: 'JavaScript data types and data structures',
			timeline: 'Há 1 dia',
			body: 'Programming languages all have built-in data structures, but these often 	differ from one language to another. This article attempts to list the 	built-in data structures available in JavaScript and what properties 	they have. These can be used to build other data structures. Wherever 	possible, comparisons with other languages are drawn.',
		},
		{
			id: '3',
			title: 'JavaScript data types and data structures',
			timeline: 'Há 1 dia',
			body: 'Programming languages all have built-in data structures, but these often 	differ from one language to another. This article attempts to list the 	built-in data structures available in JavaScript and what properties 	they have. These can be used to build other data structures. Wherever 	possible, comparisons with other languages are drawn.',
		},
		{
			id: '4',
			title: 'JavaScript data types and data structures',
			timeline: 'Há 1 dia',
			body: 'Programming languages all have built-in data structures, but these often 	differ from one language to another. This article attempts to list the 	built-in data structures available in JavaScript and what properties 	they have. These can be used to build other data structures. Wherever 	possible, comparisons with other languages are drawn.',
		},
	]

	return (
		<div>
			<Cover />
			<Profile />

			<BlogContainer>
				<BlogFormHeader>
					<h2>Publicações</h2>
					<span>{posts.length} publicações</span>
				</BlogFormHeader>

				<SearchForm />

				<PostContainer>
					{posts.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</PostContainer>
			</BlogContainer>
		</div>
	)
}
