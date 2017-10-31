import Prismic from 'prismic-javascript'
import { PRISMIC_ENDPOINT } from '../config'

// Private api methods

function prismicApi() {
  return Prismic.api(PRISMIC_ENDPOINT)
}

async function getSingle(type, config = { lang: 'en-gb' }) {
  const api = await prismicApi()
  const response = await api.getSingle(type, config)

  return response.data
}

async function getByUID(type, uid, config = { lang: 'en-gb' }) {
  const api = await prismicApi()
  const response = await api.getByUID(type, uid, config)

  return response.data
}

// Public methods

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

async function getGalleryPage(uid) {
  const galleryPageData = await getByUID('gallery', uid)
  const images = galleryPageData.images.map(({ title, image }) => ({ url: image.url, title }))

  return {
    ...galleryPageData,
    images,
  }
}

function getBackgroundPage() {
  return getSingle('background')
}

function getDisclaimerPage() {
  return getSingle('disclaimer')
}

function getContactPage() {
  return getSingle('contact')
}


export default {
  getBackgroundPage,
  getDisclaimerPage,
  getContactPage,
  getGalleryPage,
  getPaintingsPage,
  getGlassPage,
  getHomePage,
}
