
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';
function App() {

  const [guns,setGuns] = useState([]);

  const [cart,setCart] = useState([]);

  const handleAddToCart = (gun) => {
    const newCart = [...cart,gun];
    setCart(newCart);
};

  useEffect(
   () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data));
   }
    , []
  );

  return (
    <div >
    
    <Navbar></Navbar>

    <div>

    {
      cart.map(item => {
       return (
         <h1 key={item.id}>{item.name}</h1>
       ); 
      })
    }

    </div>

    <div className="card-container">
    {
      guns.map( (gun) => {
        return ( 
        <Card key={gun.id} gunData={gun} 
        handleAddToCart={handleAddToCart}
        ></Card>
        )
      })
    }

    </div>
   
    </div>
  );
}

export default App;
