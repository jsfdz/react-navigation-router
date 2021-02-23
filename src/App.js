import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Store } from './components/Store'

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Exercise #7</h1>
        <NavigationBar />
        <main>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/faq' component={Faq} />
            <Route path='/store' component={Store} />
            <Route path='/' render={() => <Redirect to='/home' />} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
