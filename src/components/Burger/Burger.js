import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    let ingredientList = Object.keys(props.ingredients)
        .map((igKey) => [...Array(props.ingredients[igKey])]
                .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
        ).reduce((arr, el) => arr.concat(el), []);

        if(ingredientList.length === 0) {
            ingredientList = <p>Please start adding ingredients!</p>
        };

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredientList}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;