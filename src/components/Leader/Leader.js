import React from 'react';

const Leader = (props) => {
    const { name,img,role,age,country,salary } = props.leader;
    const imgStyle={
      width: '159px',
      heigth: '172px'
    }
 
    return (
      
           
           <div class="col">
    <div class="card h-100">
      <img style={imgStyle} src={img} class="card-img-top rounded-circle mx-auto d-block" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title">Name:{name}</h5>
        <p class="card-text">
            <h5>Role: {role}</h5>
            <h5>Age: {age}</h5>
            <h5>Country: {country}</h5>
            <h5>Salary: ${salary}</h5>
        </p>
      </div>
    </div>
    </div>
  
        
    );
};

export default Leader;