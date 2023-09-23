import { Cover } from '@/components/Cover'
import { Post } from '@/components/Post'
import { Profile } from '@/components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, BlogFormHeader, PostContainer } from './styles'

export function Blog() {
	return (
		<div>
			<Cover />
			<Profile />

			<BlogContainer>
				<BlogFormHeader>
					<h2>Publicações</h2>
					<span>6 publicações</span>
				</BlogFormHeader>

				<SearchForm />

				<PostContainer>
					<Post />
					<Post />
					<Post />
					<Post />
				</PostContainer>
			</BlogContainer>
		</div>
	)
}
