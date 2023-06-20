import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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

const PokemonCards = ({pokemonUrl}) => {

  const [pokemon, setPokemon] = useState(null)

  console.log(pokemon)

  const formatTypesPokemon = (types = []) =>{
  const nameTypes =  types.map((type)=> type.type.name)
  const titleTypes = nameTypes.join("/")
  return titleTypes
  }

  

  useEffect(() => {

    axios .get(pokemonUrl)
          .then(({data}) =>setPokemon(data))
          .catch((err)=>console.log(err))

  }, [])
  

  return (
    <Link to={`/pokedex/${pokemon?.name} `} className={` min-[320px]:w-14 m-8 shadow-md shadow-slate-500 ${pokeLinearGradientsborder[pokemon?.types[0].type.name]} `}>
      {/* Seccion superior */}
      <section className={`relative h-40 ${pokeLinearGradients[pokemon?.types[0].type.name]}`} >

        <div className="absolute px-12 -bottom-14 w-[250px]">
          <img 
          src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name
          } />
        </div>
      </section>
      {/* seccion inferior */}
      <section>
        <h3 className={`mt-14 ${poketext[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h3>
        <h4 className="text-sm">{formatTypesPokemon(pokemon?.types)}</h4>
        <span className="text-xs text-gray-500">Type</span>

        <hr/>
        <section className="grid grid-cols-2 justify-between p-4">
        {/* Generar lista de stack */}
        {
          pokemon?. stats.slice(0,4).map((stat) => (
            <div key={stat.stat.url}>
              <h6 className="text-sm" >{stat.stat.name}</h6>
              <span className={`text-base ${poketext[pokemon?.types[0].type.name]}`}>{stat.base_stat}</span>
            </div>
          ))
        }

        </section>

      </section>
    </Link>
  )
}

export default PokemonCards