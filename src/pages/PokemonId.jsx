import { Link, useParams } from "react-router-dom"
import Header from "../components/pokedex/Header"
import { useEffect, useState } from "react"
import axios from "axios"


const pokeLinearGradients = {
  grass : "bg-gradient-to-t from-green-400 to-cyan-400",
  fire : "bg-gradient-to-t from-red-400 to-orange-400",
  normal : "bg-gradient-to-t from-amber-900 to-amber-950",
  fighting:"bg-gradient-to-t from-red-700 to-red-950",
  poison:"bg-gradient-to-t from-purple-600 to-indigo-950",
  ground: "bg-gradient-to-t from-amber-400 to-amber-700",
  rock: "bg-gradient-to-t from-gray-400 to-gray-800",
  bug: "bg-gradient-to-t from-lime-400 to-green-600",
  ghost: "bg-gradient-to-t from-indigo-400 to-indigo-900",
  steel: "bg-gradient-to-t from-slate-400 to-slate-950",
  water: "bg-gradient-to-t from-sky-400 to-sky-700",
  ice: "bg-gradient-to-t from-cyan-200 to-sky-400",
  dragon: "bg-gradient-to-t from-teal-400 to-teal-700",
  dark: "bg-gradient-to-t from-gray-500 to-black",
  fairy: "bg-gradient-to-t from-rose-300 to-rose-500",
  unknown:"bg-gradient-to-t from-zinc-300 to-zinc-700",
  shadow:"bg-gradient-to-t from-gray-400 to-gray-800",
  flying:"bg-gradient-to-t from-orange-300 to-orange-500",
  electric:"bg-gradient-to-t from-yellow-300 to-amber-500",
  psychic:"bg-gradient-to-t from-purple-300 to-purple-950"
}

const pokeLinearGradientsborder = {
  grass : "border-green-400 border-4 rounded-xl",
  fire : "border-orange-400 border-4 rounded-xl",
  normal : "border-amber-900 border-4 rounded-xl",
  fighting:"border-red-700 border-4 rounded-xl",
  poison:"border-purple-600 border-4 rounded-xl",
  ground: "border-amber-400 border-4 rounded-xl",
  rock: "border-gray-400 border-4 rounded-xl",
  bug: "border-lime-400 border-4 rounded-xl",
  ghost: "border-indigo-400 border-4 rounded-xl",
  steel: "border-slate-400 border-4 rounded-xl",
  water: "border-sky-400 border-4 rounded-xl",
  ice: "border-cyan-200 border-4 rounded-xl",
  dragon: "border-teal-400 border-4 rounded-xl",
  dark: "border-gray-500 border-4 rounded-xl",
  fairy: "border-rose-300 border-4 rounded-xl",
  unknown:"border-zinc-300 border-4 rounded-xl",
  shadow:"border-gray-400 border-4 rounded-xl",
  flying:"border-orange-300 border-4 rounded-xl",
  electric:"border-yellow-300 border-4 rounded-xl",
  psychic:"border-purple-300 border-4 rounded-xl"
}

const poketext = {
  grass : "text-green-400 text-2xl font-bold",
  fire : "text-orange-400 text-2xl font-bold",
  normal : "text-amber-900 text-2xl font-bold",
  fighting:"text-red-700 text-2xl font-bold",
  poison:"text-purple-600 text-2xl font-bold",
  ground: "text-amber-400 text-2xl font-bold",
  rock: "text-gray-400 text-2xl font-bold",
  bug: "text-lime-400 text-2xl font-bold",
  ghost: "text-indigo-400 text-2xl font-bold",
  steel: "text-slate-400 text-2xl font-bold",
  water: "text-sky-400 text-2xl font-bold",
  ice: "text-cyan-200 text-2xl font-bold",
  dragon: "text-teal-400 text-2xl font-bold",
  dark: "text-gray-500 text-2xl font-bold",
  fairy: "text-rose-300 text-2xl font-bold",
  unknown:"text-zinc-300 text-2xl font-bold",
  shadow:"text-gray-400 text-2xl font-bold",
  flying:"text-orange-300 text-2xl font-bold",
  electric:"text-yellow-300 text-2xl font-bold",
  psychic:"text-purple-300 text-2xl font-bold"
}


const PokemonId = () => {

const [pokemon, setPokemon] = useState(null)

const {pokemonName} = useParams()

const porcentProgressStat = (baseStat) =>{
 const STAT_MAX = 255
 return `${(baseStat*100)/ 255}%`
}
const formatTypesPokemon = (types = []) =>{
  const nameTypes =  types.map((type)=> type.type.name)
  const titleTypes = nameTypes[0]
  const titleTypes2 = nameTypes[1]
  return titleTypes,titleTypes2
  }

useEffect(() => {

  const url =`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

  axios .get(url)
        .then(({data}) => setPokemon(data))
        .catch((err)=>console.log(err))
 
}, [])


  return (
    <main className="">
        <Header/>
        <section>  
        <section className=" grid justify-center m-8 shadow-lg shadow-slate-500">
        <section className={`relative h-32 w-[500px]  ${pokeLinearGradients[pokemon?.types[0].type.name]}`} >

          <div className="absolute px-12 -bottom-14 w-[250px] left-1/4  items-center">
            <img 
              src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name
            } />
          </div>
        </section>

          {/* detalle del pokemon */}
          <article>
            <section className="text-center">
              <h2 className="mt-14 text-2xl text-center">#{pokemon?.id}</h2>
              <div className="grid grid-cols-3 justify-center">
              <hr />
              <h3 className={` ${poketext[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h3>
              <hr />
              </div>
              <section className="grid grid-cols-2 text-xs w-1/4 text-center justify-center ml-[190px] ">
                <div>
                  <h2>Weight</h2>
                  <span className="text-xs p-0">{pokemon?.weight}</span>
                </div>
                <div>
                  <h2>Height</h2>
                  <span className="text-xs p-0">{pokemon?.height}</span>
                </div>

              </section>
              <section className=" grid grid-cols-2">
                <span className="text-xs text-gray-500">Type</span>

                <span className="text-xs text-gray-500">abilities</span>
              </section>
              <section className="grid grid-cols-2">
                <div className="grid grid-cols-2">
                  <h4 className={`text-sm text-white m-2 rounded-lg ${pokeLinearGradients[pokemon?.types[0].type.name]}`}>{pokemon?.types[0].type.name}</h4>
                  {pokemon?.types[1] && <h4 className={`text-sm text-white m-2 rounded-lg ${pokeLinearGradients[pokemon?.types[1].type.name]}`}>{pokemon?.types[1].type.name}</h4>}
                </div>

                <div className="grid grid-cols-2">
                  <h4 className="text-sm  m-2 rounded-lg shadow-slate-400 shadow-sm">{pokemon?.abilities[0].ability.name}</h4>
                  {pokemon?.abilities[1] && <h4 className="text-sm  m-2 rounded-lg shadow-slate-400 shadow-sm">{pokemon?.abilities[1].ability.name}</h4>}
                </div>
              </section>

              
            </section> 
            {/* Seccion de stats */}
            <div className="grid grid-cols-2 justify-center">
            <h4 className="text-3xl font-bold">Stats</h4>
            <hr className="m-4"/>              
             </div>
            <section>
              {
                pokemon?.stats.map((stat)=>(
                  <article key={stat.stat.url}>
                    <section className="flex justify-between m-2 font-bold">
                      <h3>{stat.stat.name}</h3>
                      <span>{stat.base_stat}</span>
                    </section>
                  {/* Barra de progreso */}
                  <div className="bg-gray-500 h-8 rounded-md overflow-hidden m-2 ">
                    <div style={{width: porcentProgressStat(stat.base_stat)}} className={"h-full bg-yellow-400"}></div>
                  </div>
                  </article>
                ))
              }

              


              <Link to={"/pokedex"} className="ml-48 p-5 pt-7">
              <button className="text-center justify-center bg-red-500 text-white rounded-xl w-28 h-10" >Return</button>
              </Link>
            </section>

          </article>
        </section>
        </section>
    </main>
  )
}

export default PokemonId