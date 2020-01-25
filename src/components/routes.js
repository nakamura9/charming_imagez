import React from 'react'

import {Switch, Route} from 'react-router-dom'


import Gallery from'../routes/gallery'
import Contact from'../routes/contact'
import Post from '../routes/blog/post'
import Blog from '../routes/blog/list'
import Home from '../routes/home'
import About from '../routes/about'
import Packages from '../routes/packages'



const routes = () =>(
                <Switch>
                    <Route path='/gallery'>
                        <Gallery />
                    </Route>
                    <Route path='/blog/' >
                        <Blog />
                    </Route>
                    <Route path='/post/:id' component={Post} />
                    <Route path='/about' component={About} />
                    <Route path='/packages' component={Packages} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/' component={Home} />
                    <Route />
                </Switch>
)

export default routes