import { useSelector } from "react-redux"
import Header from "../components/pokedex/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import PokemonsList from "../components/pokedex/PokemonsList"

const Pokedex = () => {


const [pokemons, setPokemons] = useState([])

const [namePokemon, setNamePokemon] = useState("")

const [types, setTypes] = useState([])

const [currentType, setCurrentType] = useState("")

const nameTrainer = useSelector(store => store.nameTrainer)

const pokemonByName = pokemons.filter((pokemon)=> pokemon.name.includes(namePokemon.toLowerCase().trim())  )

const handleSubmit = (e) =>{
    e.preventDefault()
    setNamePokemon(e.target.namePokemon.value)
}

useEffect(() => {
if(!currentType){
    const URL ="https://pokeapi.co/api/v2/pokemon?limit=40"

    axios .get(URL)
          .then(({data})=>setPokemons(data.results))
          .catch((err)=>console.log(err))
}
},[currentType])

const handleChangeType = (e) =>{
  setCurrentType(e.target.value)
}

useEffect(() => {

  const URL ="https://pokeapi.co/api/v2/type"

  axios .get(URL)
        .then(({data}) => setTypes(data.results))
        .catch((err)=>console.log(err))

}, [])

useEffect(() => {
  if(currentType){

    const url = `https://pokeapi.co/api/v2/type/${currentType}/`
    
    axios .get(url)
          .then(({data}) => {
            const pokemonByType = data.pokemon.map(pokemon => pokemon.pokemon)
            setPokemons(pokemonByType)
          
          })
          .catch((err)=>console.log(err))
  }

}, [currentType])



  return (
    <main>
      <Header/>
      <p className="p-8"><span className="text-red-400 font-bold">Welcome {nameTrainer} </span> here you can find your favorite pokemon</p>

      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="pl-8 pr-4"> 
          <input id="namePokemon" placeholder="type a name pokemon" type="text" className="h-8 w-44 shadow-md shadow-slate-600 p-2 text-sm"/>
          <button className="bg-red-500 h-8 text-white w-24 shadow-sm shadow-slate-400">Search</button>
        </div>
      <select onChange={handleChangeType} className="bg-white text-center text-black w-1/4 focus:bg-red-300 focus:border-solid focus:border-red-400 focus:text-white">
        <option value="" >All Pokemons</option>
        {
          types.map((type) => ( <option className="" value={type.name} key={type.url}>{type.name}</option>
      ))}
      </select>
      </form>
      <PokemonsList pokemons={pokemonByName}/>
    </main>
  )
}

export default Pokedex