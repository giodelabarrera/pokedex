export default function PokemonEntity({id, name, types, stats}) {
  function number() {
    return id.toString().padStart(3, '0')
  }

  function toString() {
    return {
      id,
      name,
      number: number(),
      types,
      stats
    }
  }

  return {
    id,
    name,
    types,
    stats,
    number,
    toString
  }
}
