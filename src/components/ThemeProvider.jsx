import { useEffect } from 'react'
import theme from '../theme'

export default function ThemeProvider({ children }){
  // Inject CSS variables into the document root for global CSS to consume
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--green-primary', theme.colors.greenPrimary)
    root.style.setProperty('--earth-secondary', theme.colors.earthSecondary)
    root.style.setProperty('--bg', theme.colors.background)
    root.style.setProperty('--text', theme.colors.text)
    root.style.setProperty('--muted', theme.colors.muted)
    root.style.setProperty('--font-heading', theme.fonts.heading)
    root.style.setProperty('--font-body', theme.fonts.body)
    root.style.setProperty('--content-width', theme.layout.contentWidth)
    root.style.setProperty('--gap', theme.layout.gap)
  }, [])

  return children
}
