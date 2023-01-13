import React, { useState } from 'react'
import '../css/SearchForm.css'

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({keyword})
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
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
    </form>
  )
}

export default React.memo(SearchForm) 