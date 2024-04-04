import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Input from './components/Input'
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  
  
 

  return (
    <>
      <div>
        
      <Navbar></Navbar>
      
      <Input></Input>
      <Footer />
      </div>
    </>
  )
}

export default App
