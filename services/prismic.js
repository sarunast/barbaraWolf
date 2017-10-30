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

function getHome() {
  return getSingle('home')
}

export default {
  getHome,
}
