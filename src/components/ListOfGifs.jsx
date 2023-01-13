import Gif from '../components/Gif'
import '../css/ListOfGifs.css'

export default function ListOfGifs ({gifs}) {
  return <div className='ListOfGifs'>
    {
      gifs.map(({id, title, url}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </div>
}
