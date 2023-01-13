import {API_KEY, API_URL} from './settings'

export default function getGif({ keyword = "random", rating ,page = 0, limit = 25} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=${rating}&lang=en`

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      const gifs = data.map((image) => {
        const { images, title, id } = image
        const { url } = images.fixed_height_downsampled
        return { title, id, url }
      })
      return gifs
    })
}
