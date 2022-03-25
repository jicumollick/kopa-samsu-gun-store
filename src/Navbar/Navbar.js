import React from 'react';
import './Navbar.css';
import {BsFillCartFill} from 'react-icons/bs';
const Navbar = (props) => {
    const {openModal, cart} = props;
    return (
        <nav className='navbar'>
            <h1>Kopa Samsu Gun Store</h1>
            <div className="cart-counter" onClick={openModal}>
           <span>{cart.length}</span>
            <BsFillCartFill className='icon' style={{color:'#fff'}}></BsFillCartFill>
          
            </div>
        </nav>
    );
};

export default Navbar;