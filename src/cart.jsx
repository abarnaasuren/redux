import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'

function Cart() {
  const totalamt = useSelector(state=>state.Total.total);

    
    
  return (
    <div className='cart'>
        <h1 className='cart-head'>Cart</h1>
        <hr></hr>
        <div className="cart-body">
   
        <h3> FREE SHIPPING</h3>
        <h2 className='total'>Total Amount : {totalamt}</h2>
        <p><b><i>Thank you for Shopping in APP STORE.</i></b></p>
        </div>
        <div className="NoItems">
            <img
              src="https://img.freepik.com/free-photo/funny-illustration-3d-cartoon-backpacker_183364-80424.jpg?w=1380&t=st=1690967265~exp=1690967865~hmac=3a953df10987b13a88915a21662843501208169d499267818c9ff582e45e1ca6://cdni.iconscout.com/illustration/premium/thumb/before-login-no-product-in-cart-4006356-3309942.png"
              alt="Cart Empty image"
            />
          </div>
    </div>

  )
}

export default Cart