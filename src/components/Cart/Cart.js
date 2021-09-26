import React from 'react';
import Singlecart from './Singlecart';

const Cart = (props) => {
    
    const { cart } = props;
  let total = 0;
  for (const cost of cart) {
    total = total + parseFloat(cost.salary);
  }
    // console.log(cart);
    return (
        <div>
                <div className="boxStyle">
        <div className="bosStyle2" id="my-cart">
          <table className="table text-white">
            <thead>
             
              <tr>
                  
                <th colSpan="4" scope="col "><i className="fas fa-user"></i> Total Member : {cart.length}</th>
              
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Total-Donation</th>
                <td>$ <span>{total}</span></td>
                <td></td>
                <td></td>
              </tr>
                 
            </tbody>
          </table>
          <div className="parces text-center">
            <button className="btn text-center btnStyle fw-bold"><i class="fas fa-plus-circle"></i>  Create Club</button>
          </div>
          <div>
          {
cart.map(item => <Singlecart
     key={item.key}
     singleCart={item}
></Singlecart>)
                   
                }
          </div>
        </div>
      </div>
    
        </div>
    );
};

export default Cart;