import React from 'react';
import './SingleCart.css'

const Singlecart = (props) => {
    const {singleCart}=props;

    return (
        <div className="">
          <div class="d-flex my-3 align-items-center justify-content-evenly cart-bg">
          <img src={singleCart.img} class="imgClass p-2 rounded-circle" style={{height:'100px',width:'100px'}} alt="..." />
      <div>
      <h5 class="card-title">{singleCart.name}</h5>
    
      </div>
    
     </div>
      </div>

  
    
    );
};

export default Singlecart;