
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
function App() {

  const [guns,setGuns] = useState([]);

  const [cart,setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }
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
    
    <Navbar cart={cart} openModal={openModal}></Navbar>
    
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
            <div>

{
  cart.map(item => {
   return (
     <h1 key={item.id}>{item.name}</h1>
   ); 
  })
}

</div> 
</Modal>


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
