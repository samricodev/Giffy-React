import React, { useCallback, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import useNearScreen from '../hooks/useNearScreen'
import ListOFGifs from '../components/ListOfGifs'
import SearchForm from '../components/SearchForm'
import Spinner from '../components/Spinner'
import debounce from 'just-debounce-it'
import useGifs from '../hooks/useGifs'


function SearchResults({ params }) {
  const { keyword, rating } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating })
  const externalRef = useRef()
  const keywordTrans = keyword.charAt(0).toUpperCase() + keyword.slice(1)
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
        <Helmet>
          <title>{decodeURI(keywordTrans)} GIFS</title>
          <meta name="description" content={`${decodeURI(keywordTrans)} Search Results`} />
        </Helmet>
        <header className="o-header">
          <SearchForm initialKeyword={keyword} initialRating={rating} />
        </header>
        <h3 className="App-title">{decodeURI(keywordTrans)}</h3>
        <ListOFGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
}

export default SearchResults
