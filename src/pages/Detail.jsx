import { Helmet } from 'react-helmet'
import { Redirect } from 'wouter'
import useSingleGif from '../hooks/useSingleGif'
import Spinner from '../components/Spinner'
import Gif from '../components/Gif'

function Detail({ params }) {
  const {gif, isError, isLoading} = useSingleGif({ id: params.id})

  if(isLoading){
    return(
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner/>
      </>
    )
  }
  if(isError) return <Redirect to='/404'/>
  if(!gif) return null

  return <>
    <Helmet>
      <title>{gif.title} - Giffy</title>
      <meta name="description" content={`Detail of ${decodeURI(gif.title)}`}/>
    </Helmet>
    <h3>{gif.title}</h3>
    <Gif {...gif} />
  </>
}

export default Detail
