import PokemonCards from "./PokemonCards"

const PokemonsList = ({pokemons}) => {
  return (
    <section className="grid  min-[590px]:grid-cols-1 min-[640px]:grid-cols-2 min-[850px]:grid-cols-3 min-[1100px]:grid-cols-4 grid-rows-4 min-[320px]:gap-2 justify-items-center text-center min-[320px]:m-2">
        {
            pokemons.map(pokemon => <PokemonCards className="" key={pokemon.url} pokemonUrl={pokemon.url}/>)
        }
    </section>
  )
}

export default PokemonsList