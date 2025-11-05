import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEO({ 
  title, 
  description, 
  keywords,
  ogImage = '/og-image.jpg',
  canonical 
}) {
  const location = useLocation()
  const baseUrl = 'https://srishtibiofuels.in'
  const fullUrl = `${baseUrl}${location.pathname}`
  const canonicalUrl = canonical || fullUrl

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title
    }

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: fullUrl },
      { property: 'og:image', content: `${baseUrl}${ogImage}` },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${baseUrl}${ogImage}` }
    ]

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      let element = document.querySelector(selector)
      
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        if (name) element.setAttribute('name', name)
        if (property) element.setAttribute('property', property)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    })

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      canonicalLink.setAttribute('href', canonicalUrl)
      document.head.appendChild(canonicalLink)
    }
  }, [title, description, keywords, fullUrl, ogImage, canonicalUrl])

  return null
}
