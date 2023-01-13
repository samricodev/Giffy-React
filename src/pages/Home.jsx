import { Helmet } from 'react-helmet'
import ListOFGifs from '../components/ListOfGifs'
import SearchForm from '../components/SearchForm'
import LazyLoad from '../components/LazyLoad'
import useGifs from '../hooks/useGifs'
import '../css/Home.css'

function Home() {
  const { gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Giffy</title>
        <meta name="description" content="Giffy searcher" />
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
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
