import { useEffect, useState } from 'react'
import getTrendingTerms from '../services/getTrendingTerms'
import Category from './Category'

function TrendingSearches(){
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms().then(setTrends)
  },[])

  return <Category  name='Tendencias' options={trends} />
}

export default TrendingSearches