import React, { useState } from 'react'
import { useLocation } from 'wouter'
import '../css/SearchForm.css'

const RATINGS = ['g','pg','pg-13','r']

function SearchForm({ initialRating = 'g', initialKeyword = ''}) {
  const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
  const [rating, setRating] = useState(initialRating)
  const [path, pushLocation] = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleChangeRating = (event) => {
    setRating(event.target.value)
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