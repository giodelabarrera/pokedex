import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPokemonList } from "~/data";


export const loader = async () => {
  const pokemonList = await getPokemonList({ limit: 1200 });
  return json({ pokemonList });
};

export default function Index() {
  const { pokemonList } = useLoaderData<typeof loader>();

  const baseClass = 'pk-ScreenPokemonList'

  return (
    <div className={baseClass}>
      {/* <div className={`${baseClass}-filterBar`}>
        <FilterSort value={sort} onChange={handleFilterSortChange} />
      </div> */}
      <div className={`${baseClass}-content`}>
        {pokemonList.total ? (
          <>
            <PokemonList pokemonList={pokemonList.results}>
              {({ number, name, imageUrl, slug, types }) => (
                <PokemonCard
                  number={number}
                  name={name}
                  imageUrl={imageUrl}
                  types={types}
                  link={makePokemonDetailLink(slug)}
                />
              )}
            </PokemonList>
          </>
        ) : (
          <NoSearchResults />
        )}
      </div>
    </div>
  )
}

function makePokemonDetailLink(slug) {
  return function (props) {
    return <Link {...props} to={`/p/${slug}`} />
  }
}

function NoSearchResults() {
  const baseClass = 'pk-ScreenPokemonList-noSearchResults'
  return (
    <div className={baseClass}>
      <h2 className={`${baseClass}-title`}>No Pokémon matched your search!</h2>
      <p>Try searching for part of your number or name</p>
    </div>
  )
}

function PokemonList({ pokemonList, children }) {
  const baseClass = 'pk-PokemonList'
  return (
    <div className={baseClass}>
      {pokemonList.map(pokemon => (
        <div className={`${baseClass}-item`} key={pokemon.id}>
          {children(pokemon)}
        </div>
      ))}
    </div>
  )
}

function PokemonCard({
  number,
  name,
  imageUrl,
  types,
  link: Link
}) {
  const baseClass = 'pk-PokemonCard'
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-imageContainer`}>
        <Link>
          <img src={imageUrl} alt={name} />
        </Link>
      </div>
      <div className={`${baseClass}-info`}>
        <div className={`${baseClass}-titleContainer`}>
          {name} <span className={`${baseClass}-number`}>#{number}</span>
        </div>
        <div className={`${baseClass}-typesContainer`}>
          <div className={`${baseClass}-types`}>
            {types.map(type => (
              <div className={`${baseClass}-typeItem`} key={type}>
                <PokemonType type={type} size="small" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PokemonType({ type, size = 'medium' }) {
  const baseClass = 'pk-PokemonType'
  return (
    <div className={`${baseClass} ${baseClass}--${size} u-${type}`}>{type}</div>
  )
}
