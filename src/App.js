
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
function App() {

  const [guns,setGuns] = useState([]);

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
    </div>
  );
}

export default App;
