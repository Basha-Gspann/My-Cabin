import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "cabinone",
                "src": "https://i.pinimg.com/550x/95/d6/74/95d67402effa2b1ebd305f25d0fc438e.jpg",
                "description": "BE CREATIVE",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 3,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "cabintwo",
                "src": "https://stylesatlife.com/wp-content/uploads/2020/01/small-office-cabin-design.jpg",
                "description": "DREAM BIG",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 4,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "cabinthree",
                "src": "https://i.pinimg.com/550x/79/4d/9f/794d9f4edbecc2e09322bb2ddd863af7.jpg",
                "description": "START SMALL",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 3,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "cabinfour",
                "src": "https://i.pinimg.com/474x/94/15/67/9415677f57417af2e262259b7c38766c.jpg",
                "description": "WORK HARD",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 1,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "cabinfive",
                "src": "https://creativeshelf.ae/wp-content/uploads/2021/11/executive-office.jpeg",
                "description": "STAY FOCUSED",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 5,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "cabinsix",
                "src": "https://i.pinimg.com/736x/4c/5f/9b/4c5f9b5b33ac4833bfbbfc395df152ce.jpg",
                "description": "KEEP GOING FORWARD",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 1,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "cabinseven",
                "src": "https://i.pinimg.com/736x/0d/26/c7/0d26c76dba1ea102554246985d8a5558.jpg",
                "description": "POSTIVE ACTION",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 2,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "cabineight",
                "src": "https://i.pinimg.com/736x/0b/8b/73/0b8b73aca3e72dd6003871aff7d2c298.jpg",
                "description": "POSTIVE VISION",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 9,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "cabinnine",
                "src": "https://i.pinimg.com/originals/11/b9/40/11b940e3766632716bf932f61fe61d92.jpg",
                "description": "SUCCESS",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 5,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "cabinten",
                "src": "https://i.pinimg.com/736x/4c/5f/9b/4c5f9b5b33ac4833bfbbfc395df152ce.jpg",
                "description": "IDEA",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 5,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "cabineleven",
                "src": "https://64.media.tumblr.com/b8e803259c6b8f6ecdd5882bdbbb77de/4a5743619c1bddc8-95/s540x810/6c6076849f9ca2243a0ae485bae07c42bdaadfd6.jpg",
                "description":"MAKE IT MATTER",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 3,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "cabin",
                "src": "https://i.pinimg.com/736x/a8/82/27/a8822794050a4989713a0d57163988db.jpg",
                "description": "WORK HARD STAY HUMBLE",
                "content": "Browse our customers' success stories in case studies, get insights from subject-matter experts via white papers, discover real-world knowledge in the form of blogs, and stay updated about the events we participate.",
                "price": 7,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


