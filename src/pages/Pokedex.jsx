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

const [currentPage, setCurrentPage] = useState(1)

const nameTrainer = useSelector(store => store.nameTrainer)

const pokemonByName = pokemons.filter((pokemon)=> pokemon.name.includes(namePokemon.toLowerCase().trim())  )

const handleSubmit = (e) =>{
    e.preventDefault()
    setNamePokemon(e.target.namePokemon.value)
}

const paginationLogic = () => {
  const POKEMONS_PER_PAGE = 16

  const sliceStar = (currentPage-1) * POKEMONS_PER_PAGE
  const sliceEnd = sliceStar + POKEMONS_PER_PAGE
  const pokemonInPage = pokemonByName.slice(sliceStar,sliceEnd)

  const lastPage = Math.ceil(pokemonByName.length / POKEMONS_PER_PAGE) || 1

  const PAGES_PER_BLOCK = 7
  const actualBlock = Math.ceil(currentPage/PAGES_PER_BLOCK)

  const pagesInBlock = []
  const minPage = (actualBlock -1) * PAGES_PER_BLOCK + 1
  const maxPage = actualBlock * PAGES_PER_BLOCK
  for (let i = minPage ; i <= maxPage; i++) {
    if(i <= lastPage){
    pagesInBlock.push(i)
    } 
  }
  return {pokemonInPage, lastPage, pagesInBlock}
}

const {lastPage,pagesInBlock,pokemonInPage} = paginationLogic()

const handleClickPreviousPage = () => {
  const newCurrentPage = currentPage - 1
  if(newCurrentPage >= 1){
    setCurrentPage(newCurrentPage)
  }
  
}

const handleClickNextPage = () => {
  const newCurrentPage = currentPage + 1 
  if(newCurrentPage <= lastPage){
  setCurrentPage(newCurrentPage)
  }
}

useEffect(() => {
if(!currentType){
    const URL ="https://pokeapi.co/api/v2/pokemon?limit=1280"

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

useEffect(() => {
  
  setCurrentPage(1)

}, [namePokemon, currentType])


  return (
    <main>
      <Header/>
      <p className="p-8"><span className="text-red-400 font-bold">Welcome {nameTrainer} </span> here you can find your favorite pokemon</p>

      <form onSubmit={handleSubmit} className="flex justify-center flex-wrap gap-4">
        <div className="pl-8 pr-4"> 
          <input id="namePokemon" placeholder="type a name pokemon" type="text" className="h-8 w-[300px] shadow-md shadow-slate-600 p-2 text-sm"/>
          <button className="bg-red-500 h-8 text-white w-24 shadow-sm shadow-slate-400">Search</button>
        </div>
      <select onChange={handleChangeType} className="bg-white text-center text-black w-1/3 focus:bg-red-300 focus:border-solid focus:border-red-400 focus:text-white">
        <option value="" >All Pokemons</option>
        {
          types.map((type) => ( <option className="" value={type.name} key={type.url}>{type.name}</option>
      ))}
      </select>
      </form>

      <section>
        <PokemonsList pokemons={pokemonByName} pokemonInPage={pokemonInPage}/>
      </section>
      <ul className=" flex gap-3 justify-center py-9 px-2 flex-wrap ">
      <li onClick={()=>setCurrentPage(1)} className="shadow-slate-400 shadow-md hover:bg-red-600 font-bold hover:text-white rounded-md cursor-pointer w-20 text-center h-12 pt-3">{"|<<"}</li>
        <li onClick={handleClickPreviousPage} className="shadow-slate-400 shadow-md hover:bg-red-600 font-bold hover:text-white rounded-md cursor-pointer w-20 text-center h-12 pt-3">{"<<"}</li>
        {
          pagesInBlock.map(numberPage => <li onClick={() => setCurrentPage(numberPage)} className={`shadow-slate-400 shadow-md hover:bg-red-600 font-bold hover:text-white  rounded-md cursor-pointer w-16 text-center h-12 pt-3 ${numberPage === currentPage && "bg-red-400 text-white"}`} key={numberPage}>{numberPage}</li>)
        }
        <li onClick={handleClickNextPage} className="shadow-slate-400 shadow-md hover:bg-red-600 font-bold hover:text-white  rounded-md cursor-pointer w-20 text-center h-12 pt-3">{">>"}</li>
        <li onClick={()=> setCurrentPage(lastPage)} className="shadow-slate-400 shadow-md hover:bg-red-600 font-bold hover:text-white  rounded-md cursor-pointer w-20 text-center h-12 pt-3">{">>|"}</li>
      </ul>
    </main>
  )
}

export default Pokedex