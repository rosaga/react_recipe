import React, {useState, useEffect} from 'react';
import './App.css';
import Recipes from './Recipes';

function App(){
  const App_ID = 'c5ae514f';
  const App_key = '5ad319cfe8a64ef9ea5a935fd8559feb'
  const [recipies, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('Chicken')

  useEffect(() => {  //similar to componentDidUpdate
    getRecipes()
  }, [query])

  async function getRecipes(){
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_key}&from=0&to=12`)
    const Data = await response.json()
    setRecipes(Data.hits)
  }
  console.log(recipies)
 
 const updatesearch = e => {
   setSearch(e.target.value)
 }
 const updateQuery = e =>{
   e.preventDefault()
   search == '' ? setQuery('chicken') :  setQuery(search)
  
   setSearch('')
 }
 
    return (
      <div className="App">
       <form className='search-form' onSubmit={updateQuery}>
         <input className='search-bar' type='text' placeholder='Search Recipe' value = {search} onChange = {updatesearch} />
         <button className='search-button' type ='submit'>Search</button>
       </form>
       <div className = 'recipies'>
      {recipies.map(recipies => (
        <Recipes 
        key = {recipies.recipe.image}
        title = {recipies.recipe.label} 
        calories = {recipies.recipe.calories}
        image = {recipies.recipe.image}
        ingredient = {recipies.recipe.ingredients} />
      ))}
      </div>
      </div>
    );
  }


export default App;
