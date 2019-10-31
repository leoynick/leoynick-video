const BASE_API = 'https://api.themoviedb.org/3'
const API_KEY = ''

class Api {
  async getSuggestion (id) {
    const query = await window.fetch(`${BASE_API}/movie/${id}/recommendations?api_key=${API_KEY}`)
    const { results } = await query.json()
    return results
  }

  async getGenres () {
    const query = await window.fetch(`${BASE_API}/genre/movie/list?api_key=${API_KEY}`)
    const { genres } = await query.json()
    return genres
  }
}

export default new Api()
