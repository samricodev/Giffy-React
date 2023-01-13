import { Link, Route } from "wouter"
import { GifsContextProvider } from "./context/GifsContext"
import StaticContext from "./context/StaticContext"
import SearchResults from "./pages/SearchResults"
import ErrorPage from './pages/ErrorPage'
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import "./App.css"

function App() {
  return (
    <StaticContext.Provider
      value={{name: 'samsepiol'}}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img src="../public/logo.png" alt="Giffy logo" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail}/>
            <Route path="/404" component={ErrorPage}/>
          </GifsContextProvider>
        </section>
    </div>
    </StaticContext.Provider>
  )
}

export default App
