import React from 'react';
import './Leader.css'

const Leader = (props) => {
    const { name,img,role,age,country,salary } = props.leader;
    
 
    return (
      
           
           <div className="col">
    <div className="card h-100 cardStyle text-white">
      <img style={{height:'14rem',width:'15rem'}} src={img} className="card-img-top rounded-circle mx-auto" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Name: <span>{name}</span></h5>
          <h4>Role: <span>{role}</span></h4>
            <h4>Age: <span>{age}</span></h4>
            <h4>Country: <span>{country}</span></h4>
            <h4>Donation: <span>${salary}</span></h4>
    
        <button onClick={() => props.handleAddToCart(props.leader)}
         className="btnStylemain fw-bold "><i class="fas fa-cart-plus"></i> Add To Club</button>
      </div>
    </div>
    </div>
  
        
    );
};

export default Leader;