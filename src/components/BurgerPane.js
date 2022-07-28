import React, { Component } from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
    
    let allBurgerItems = props.burgerItems.map((ing, i) => (
            <li key={i}>
            <Ingredient 
                itemKey={i}
                ingredient={ing}
                clickFunc={props.remove}
            />
        </li>
    ))
    
    return (
        <>
            <section>
                <h3>Burger Pane</h3>
                <ul>
                    {allBurgerItems}
                </ul>
                <ClearBurger clear={props.clear}/>  
            </section>
        </>
    )
    
}

export default BurgerPane