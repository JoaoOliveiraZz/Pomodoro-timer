import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

// Componenets
// import { Button } from './components/Button'

// Constants
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
