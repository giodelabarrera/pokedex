export default function GetPokemonSlugService() {
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/♀/g, '-female') // Replace ♀ with -female
      .replace(/♂/g, '-male') // Replace ♂ with -male
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }

  return {
    execute({pokemonName}) {
      return slugify(pokemonName)
    }
  }
}
