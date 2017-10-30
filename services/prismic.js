import Prismic from 'prismic-javascript'
import { PRISMIC_ENDPOINT } from '../config'

function prismicApi() {
  return Prismic.api(PRISMIC_ENDPOINT)
}

async function getSingle(type, config = { lang: 'en-gb' }) {
  const api = await prismicApi()
  const response = await api.getSingle(type, config)

  return response.data
}

function getHomePage() {
  return getSingle('home')
}

async function getPaintingsPage() {
  const paintings = await getSingle('paintings', {
    fetchLinks: ['gallery.cover_image', 'gallery.title'],
  })

  return {
    ...paintings,
    galleries: paintings.galleries.map(gallery => ({
      uid: gallery.gallery.uid,
      image: gallery.gallery.data.cover_image.url,
      title: gallery.gallery.data.title,
    })),
  }
}

async function getGlassPage() {
  const paintings = await getSingle('glass', {
    fetchLinks: ['gallery.cover_image', 'gallery.title'],
  })

  return {
    ...paintings,
    galleries: paintings.galleries.map(gallery => ({
      uid: gallery.gallery.uid,
      image: gallery.gallery.data.cover_image.url,
      title: gallery.gallery.data.title,
    })),
  }
}

export default {
  getPaintingsPage,
  getGlassPage,
  getHomePage,
}
