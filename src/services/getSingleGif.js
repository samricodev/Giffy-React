import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGifs = apiResponse => {
  const {data} = apiResponse
  const {images, title, id} = data
  const { url } = images.fixed_height_downsampled
  return { title, id, url }
}

function getSingleGif({ id }){
  return fetch(`${API_URL}/gifs/${id}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

export default getSingleGif