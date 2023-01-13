import React, {Suspense} from 'react'
import useNearScreen from '../hooks/useNearScreen' 
import Spinner from './Spinner'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function lazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  )
}
