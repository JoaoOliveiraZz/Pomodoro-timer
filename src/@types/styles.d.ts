import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // Criando uma tipagem para o módulo do sytle-components

  export interface DefaultTheme extends ThemeType {}
}
