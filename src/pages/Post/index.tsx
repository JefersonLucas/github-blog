import { Cover } from '@/components/Cover'
import { PostInfo } from '@/components/PostInfo'
import ReactMarkdown from 'react-markdown'
import { PostContainer } from './styles'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| a | b |
`

export function Post() {
	return (
		<div>
			<Cover />

			<PostInfo />

			<PostContainer>
				<ReactMarkdown children={markdown} />
			</PostContainer>
		</div>
	)
}
