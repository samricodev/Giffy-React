import React from 'react'
import { useLocation } from 'wouter'
import useForm from '../hooks/useForm'
import '../css/SearchForm.css'

const RATINGS = ['g','pg','pg-13','r']

function SearchForm({ initialRating = 'g', initialKeyword = ''}) {
  const [path, pushLocation] = useLocation()
  const { keyword, rating, updateKeyword, updateRating} = useForm({ initialKeyword, initialRating })

  const handleChange = (event) => {
    updateKeyword(event.target.value)
  }

  const handleChangeRating = (event) => {
    updateRating(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  return (
    <form onSubmit={handleSubmit} className="c-search">
      <button>Buscar</button>
      <input
        className="c-search-input"
        placeholder="Search a gif"
        type="text"
        value={keyword}
        onChange={handleChange}
      />
      <select className="c-search-list" value={rating} onChange={handleChangeRating} >
          <option disabled>
            Rating:
          </option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
    </form>
  )
}

export default React.memo(SearchForm) 