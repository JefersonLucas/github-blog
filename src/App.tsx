import { Router } from '@/routes'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	)
}
