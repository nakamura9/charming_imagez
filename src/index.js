import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import AppNav from './components/nav'
import Footer from './components/footer'
import Home from './routes/home'
import About from './routes/about'
import Packages from './routes/packages'
import {createBrowserHistory} from 'history'

import Gallery from'./routes/gallery'
import Post from './routes/blog/post'
import Blog from './routes/blog/list'


// const Gallery = React.lazy(() => import('./routes/gallery'))
// const Post = React.lazy(() => import('./routes/blog/post'))
// const Blog = React.lazy(() => import('./routes/blog/list'))

// const LazyComponent = (Component) =>{
//     return props => (
//         <Suspense fallback={<div>Loading...</div>} >
//             <Component {...props} />
//         </Suspense>
//     )
// }
const browserHistory = createBrowserHistory()

class App extends React.Component{
    render(){
        return(<Router>
            <AppNav />
            {/* <Suspense fallback={<div>Loading...</div>} > */}
                <Switch>
                    <Route path='/gallery'>
                        <Gallery />
                    </Route>
                    <Route path='/blog/' >
                        <Blog />
                    </Route>
                    <Route path='/post/:id' component={Post}/>
                    
                    <Route path='/about' component={About} />
                    <Route path='/packages' component={Packages} />
                    <Route path='/' component={Home} />
                </Switch>
            {/* </Suspense> */}
            <Footer />
        </Router>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))