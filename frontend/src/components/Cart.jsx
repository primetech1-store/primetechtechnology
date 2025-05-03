import React from 'react'
import Payment from '../Payment'
import Popup from 'reactjs-popup';

const Cart = () => {
  return (
    <div>
        <h1>Cart</h1>
        <Popup trigger={<button> Checkout</button>} position="right center">
            <Payment />
        </Popup>
        <button>Checkout</button>
    </div>
  )
}

export default Cart