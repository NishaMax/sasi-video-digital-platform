import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sasi Video Digital Platform',
    short_name: 'Sasi Video',
    description: 'Your premier destination for electronics and trusted services in Kalawana and Ratnapura.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#dc2626', // Sasi Red
    icons: [
      {
        src: '/LogoPart.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/LogoPart.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
    ],
  }
}
