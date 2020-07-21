export default function GetPokemonImageUrls({baseImageUrl}) {
  return {
    execute({pokemonNumber}) {
      return {
        large: `${baseImageUrl}/full/${pokemonNumber}.png`,
        small: `${baseImageUrl}/detail/${pokemonNumber}.png`
      }
    }
  }
}
