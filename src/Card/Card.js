import React from 'react';
import './Card.css';
const Card = (props) => {
    const {name,img, bullet, capacity , action , price} = props.gunData;
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h1>{name}</h1>
            <p>Bullet Type: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>
            <div className="add-to-cart">
                <button>Add to cart</button>
                <h1>${price}</h1>
            </div>
            
        </div>
    );
};

export default Card;