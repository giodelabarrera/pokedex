import { BrowserRouter as Router } from 'react-router-dom'

import { DomainProvider } from './domain'
import { ThemeModeProvider } from './themeMode'

import domain from '../domain'

type AppProvidersProps = {
  children?: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <DomainProvider domain={domain}>
      <ThemeModeProvider>
        <Router>{children}</Router>
      </ThemeModeProvider>
    </DomainProvider>
  )
}
