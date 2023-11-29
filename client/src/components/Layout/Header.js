import React, { Fragment } from 'react'


import './Header.css'
import MealImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartbutton'

const Header = (props) => {
  return (
    <Fragment>
        <header className='header'>
            <h1>ReactMe</h1>
            <HeaderCartButton onOpen={props.onCartOpen}/>
        </header>
        <div className='main-image'>
            <img src={MealImage} alt="Meals"/>
        </div>
    </Fragment>
  )
}

export default Header