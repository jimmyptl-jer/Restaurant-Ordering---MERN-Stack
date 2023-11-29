import React, { useContext } from 'react'

import './MealItem.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {

  const CartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`

    
  const addToCart = (amount) =>{
    CartCtx.addItem({
      id:props.id,
      name: props.name,
      amount:amount,
      price:price
    })
  }
  return (
    <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCart}></MealItemForm>
        </div>
    </li>
  )
}

export default MealItem