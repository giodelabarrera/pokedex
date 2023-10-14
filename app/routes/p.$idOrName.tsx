import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPokemonItem } from "~/data";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.idOrName, "Missing idOrName param");
  const pokemon = await getPokemonItem(params.idOrName);
  if (!pokemon) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ pokemon });
};

export default function Detail() {
  const { pokemon } = useLoaderData<typeof loader>()

  const baseClass = 'pk-ScreenPokemonDetail'

  return (
    <div className={baseClass}>
      <PokemonDetail pokemon={pokemon} />
    </div>
  )
}

function PokemonDetail({ pokemon }) {
  const { name, number, types, stats, imageUrl } = pokemon
  const baseClass = 'pk-PokemonDetail'
  return (
    <section className={baseClass}>
      <h1 className={`${baseClass}-title`}>
        {name} <span className={`${baseClass}-number`}>#{number}</span>
      </h1>
      <div className={`${baseClass}-content`}>
        <div className={`${baseClass}-column`}>
          <div className={`${baseClass}-imageContainer`}>
            <img src={imageUrl} alt={name} />
          </div>
        </div>
        <div className={`${baseClass}-column`}>
          <div className={`${baseClass}-info`}>
            <div className={`${baseClass}-section`}>
              <h3 className={`${baseClass}-subtitle`}>Type</h3>
              <div className={`${baseClass}-types`}>
                {types.map(type => (
                  <div className={`${baseClass}-typeItem`} key={type}>
                    <PokemonType type={type} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${baseClass}-section`}>
              <h3 className={`${baseClass}-subtitle`}>Stats</h3>
              <PokemonStats stats={stats} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function PokemonType({ type, size = 'medium' }) {
  const baseClass = 'pk-PokemonType'
  return (
    <div className={`${baseClass} ${baseClass}--${size} u-${type}`}>{type}</div>
  )
}


function PokemonStats({ stats }) {
  const baseClass = 'pk-PokemonStats'
  return (
    <div className={baseClass}>
      <ul className={`${baseClass}-list`}>
        <li className={`${baseClass}-item`}>
          <Stat name="HP" value={stats.hp} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="ATK" value={stats.attack} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="DEF" value={stats.defense} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="SATK" value={stats.special_attack} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="SDEF" value={stats.special_defense} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="SPD" value={stats.speed} />
        </li>
      </ul>
    </div>
  )
}

function Stat({ name, value }) {
  const baseClass = 'pk-PokemonStats-stat'
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-nameContainer`}>
        <div className={`${baseClass}-name`}>{name}</div>
      </div>
      <div className={`${baseClass}-valueContainer`}>
        <div className={`${baseClass}-value`}>
          <span>{value}</span>
        </div>
      </div>
      <div className={`${baseClass}-progressContainer`}>
        <LinearProgress value={value} />
      </div>
    </div>
  )
}

const MAX_STAT = 240

function LinearProgress({ value }) {
  const baseClass = 'pk-PokemonStats-linearProgress'
  const lengthPercentage = getLengthPercentage(value, MAX_STAT)
  const barStyle = {
    transform: `translateX(-${lengthPercentage}%)`
  }
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`} style={barStyle} />
    </div>
  )
}

function getLengthPercentage(value, maxValue) {
  return 100 - Math.round((value * 100) / maxValue)
}