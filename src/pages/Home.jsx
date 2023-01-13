import { Helmet } from 'react-helmet'
import { useLocation } from 'wouter'
import { useCallback } from 'react'
import ListOFGifs from '../components/ListOfGifs'
import SearchForm from '../components/SearchForm'
import LazyLoad from '../components/LazyLoad'
import useGifs from '../hooks/useGifs'
import '../css/Home.css'

function Home() {
  const [path, pushLocation] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = useCallback(({keyword}) => {
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  },[pushLocation])

  return (
    <>
      <Helmet>
        <title>Giffy</title>
        <meta name="description" content="Giffy searcher" />
      </Helmet>
      <SearchForm onSubmit={handleSubmit}/>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Ultima búsqueda</h3>
            <ListOFGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <LazyLoad />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
