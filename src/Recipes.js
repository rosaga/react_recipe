import React from 'react'
import './Recipes.css'

function Recipes(props) {
    return (
        <div className = 'recipe'>
            <h1>{props.title} </h1>
            <p>{props.calories} Calories </p>
            <ol>
                {props.ingredient.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className = 'image' src ={props.image} alt = ''/>
        </div>
    )
}

export default Recipes
