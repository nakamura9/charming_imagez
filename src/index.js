import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AppNav from './components/nav'
import Footer from './components/footer'
import Home from './routes/home'
import About from './routes/about'
import Packages from './routes/packages'
import {createBrowserHistory} from 'history'

const Gallery = React.lazy(() => import('./routes/gallery'))
const Blog = React.lazy(() => import('./routes/blog/list'))
const Post = React.lazy(() => import('./routes/blog/post'))

const LazyComponent = (Component) =>{
    return props => (
        <React.Suspense fallback={<div>Loading...</div>} >
            <Component {...props} />
        </React.Suspense>
    )
}
const browserHistory = createBrowserHistory()

class App extends React.Component{
    render(){
        return(<Router>
            <AppNav />
            <Switch>
                <Route path='/gallery' component={LazyComponent(Gallery)} />
                <Route path='/blog/' component={LazyComponent(Blog)} />
                <Route path='/post/:id' component={Post} />
                <Route path='/about' component={About} />
                <Route path='/packages' component={Packages} />
                <Route path='/' component={Home} />
            </Switch>
            <Footer />
        </Router>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))