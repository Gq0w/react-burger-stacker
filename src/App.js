import React, { useState } from 'react';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane'
import './App.css';

const App = () => {
  
  const ingredients = [ 
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]

  const [burgerItems, setBurgerItems] = useState([{name: '', color: ''}])

  const addToBurger = (e) => {
    e.preventDefault()
    const ingName = e.target.innerText
    const ingColor = e.target.style.backgroundColor
    setBurgerItems([{ name: ingName, color: ingColor}, ...burgerItems])
  }  
  


  // remove from burger
  const removeFromStack = (e) => {
    const clickIndex = e.target.id
    const currBurger = burgerItems.slice()
    currBurger.splice(clickIndex, 1)
    setBurgerItems(currBurger)
}

  const clearBurger = () => {
    console.log('im clearing')
    setBurgerItems([])
  }
 
  return (
    <div className="App" >
      <div className="pane">
      <ul>
        <IngredientList ingredients={ingredients} add={addToBurger} id="ingredients"/>
      </ul>

      </div>
      <div className="pane">
        <BurgerPane burgerItems={burgerItems} clear={clearBurger} remove={removeFromStack}/>
      </div>
    </div>
  )
}

export default App