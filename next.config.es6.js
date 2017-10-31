/* eslint-disable import/prefer-default-export */
import Api from './services/prismic'

const staticRoutes = {
  '/': { page: '/' },
  '/glass': { page: '/glass' },
  '/painting': { page: '/painting' },
  '/background': { page: '/background' },
  '/contact': { page: '/contact' },
  '/disclaimer': { page: '/disclaimer' },
}

export async function exportPathMap() {
  // we fetch our list of posts, this allow us to dynamically generate the exported pages
  const galleries = await Api.getAllByType('gallery')

  // transform the list of posts into a map of pages with the pathname `/gallery/:uid`
  const galleryRoutes = galleries.reduce(
    (pages, gallery) =>
      Object.assign({}, pages, {
        [`/gallery/${gallery.uid}`]: {
          page: '/gallery',
          query: { uid: gallery.uid },
        },
      }),
    {},
  )

  // combine the map of post pages with the home
  return Object.assign({}, galleryRoutes, staticRoutes)
}
