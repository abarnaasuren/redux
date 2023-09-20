
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardData from './CardData'
import Cart from './Cart'


function App() {
  

  return (
    <>
    <div className="row">
        <div className="col-8">
          <CardData></CardData>
        </div>
        <div className="col-4">
          <Cart></Cart>
        </div>
     </div>   
      
    </>
  )
}

export default App