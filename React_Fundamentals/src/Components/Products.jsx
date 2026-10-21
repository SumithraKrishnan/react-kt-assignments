import React from 'react';
import Laptop from './Laptop.jpg';
import Mobile from './Mobile.jpg';
import Headphone from './Headphone.jpg';
import TV from './TV.jpg';
import Fridge from './Fridge.jpg';
import prodstyle from './Products.module.css';

function Products(props) {
    const products=[
        {name:"Laptop",
         price: 70000,
         image: Laptop
        },
        {name:"Mobile Phone",
         price: 40000,
         image: Mobile
        },
        {name:"HeadPhone",
         price: 8000,
         image: Headphone
        },
        {name:"TV",
         price: 29800,
         image: TV
        },
        {name:"Refridgerator",
         price: 40000,
         image: Fridge
        }
    ]
    return (
        <div className={prodstyle.container}>
            {products.map((product,index)=><li key={index} className={prodstyle.card} style={{listStyleType:"none"}}>
                <h3>{product.name}</h3>
                <img src={product.image} width={150} height={150}/>
                <h4>Price : {product.price}</h4>
                
            </li>)}
        </div>
    );
}

export default Products;