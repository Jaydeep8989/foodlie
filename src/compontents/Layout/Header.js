import React, { Fragment } from 'react';
import mealImage from '../../Images/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        {/* we can't use the -(dash) in classname so stru is ['classname with dash'] */}
        <div className={classes['main-image']}>
            <img src={mealImage} alt="Food!"/>
        </div>
    </Fragment>
  )
}

export default Header
