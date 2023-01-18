import { Link, Route, Switch } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'
import SearchResults from './pages/SearchResults'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Home from './pages/Home'
import "./App.css"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Header />
        <Link to="/">
          <figure className="App-logo">
            <img src="/logo.png" alt="Giffy logo" />
          </figure>
        </Link>
        <GifsContextProvider>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={ErrorPage} />
            <Route path="/login" component={Login} />
          </Switch>
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App
