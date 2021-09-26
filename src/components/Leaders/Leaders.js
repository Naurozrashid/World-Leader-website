import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Leader from '../Leader/Leader';
import './Leaders.css'

const Leaders = () => {
    const [leaders, setLeaders] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setLeaders(data));
    }, []);

    const handleAddToCart = (leaderr) => {
        const matchKey = cart.find((data) => data.key === leaderr.key);
        
        if (matchKey === undefined) {
          const newCart = [...cart, leaderr];
          setCart(newCart);
        } else {
          alert(
            "You Are Already Added " +
              '"' +
              leaderr.name +
              '"' +
              " To The Cart"
          );
        }
           
    }

    return (
        <div className="container">
            <div className="row">
         <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-3">
             {
                    leaders.map(leader => <Leader
                        key={leader.key}
                        leader={leader}
                        handleAddToCart={handleAddToCart}
                        ></Leader>)
                }
            </div>
            </div>
            <div className="text-center col-md-3">
                     <Cart key={cart.key}
                     cart={cart}
                     ></Cart>
            </div>
        </div>
            
            
        </div>
    );
};

export default Leaders;