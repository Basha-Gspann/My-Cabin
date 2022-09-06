import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'
import Home from './section/Home'
import About from './section/About'
import Login from './section/Login'
import Contact from './section/Contact'
import Form from './Form/form'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Home} exact />

                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/about" component={About} exact  />
                    <Route path="/login" component={Login} exact  />
                    <Route path="/Contact" component={Contact} exact  />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />

                    <Route path="/form" component={Form} exact />
                    
            </section>
        )
    }
}

export default Section
