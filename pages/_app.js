import Layout from '../components/Layout'
// Styles
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../styles/globals.css'

const myTheme = createTheme({
	typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={myTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
