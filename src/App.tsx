import { Post } from '@/pages/Post'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { ThemeProvider } from 'styled-components'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<Post />
		</ThemeProvider>
	)
}
