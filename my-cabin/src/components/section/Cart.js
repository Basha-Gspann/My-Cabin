import React, { Component } from 'react'
import {DataContext} from '../Context'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;
    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <span>TeamSize:{item.capacity * item.count}</span>
                                    </div>
                                    <p>{item.Newcabin}</p>
                                    <p>{item.content}</p>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                  
                </>
                )
            }
        }
}

export default Cart
