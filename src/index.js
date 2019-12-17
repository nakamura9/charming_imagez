import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import AppNav from './components/nav'
import Footer from './components/footer'
import Home from './routes/home'
import Blog from './routes/blog/list'
import About from './routes/about'
import Packages from './routes/packages'
import Gallery from './routes/gallery'
import {createBrowserHistory} from 'history'


const browserHistory = createBrowserHistory()

class App extends React.Component{
    render(){
        return(<Router>
            <AppNav />
            <Switch>
                <Route path='/gallery' component={Gallery} />
                <Route path='/blog/' component={Blog} />
                <Route path='/about' component={About} />
                <Route path='/packages' component={Packages} />
                <Route path='/' component={Home} />
            </Switch>
            <Footer />
        </Router>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))