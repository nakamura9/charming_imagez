import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AppNav from './components/nav'
import Footer from './components/footer'
import Routes from './components/routes'

import {createBrowserHistory} from 'history'



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
                <Routes />
            {/* </Suspense> */}
            <Footer />
        </Router>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))