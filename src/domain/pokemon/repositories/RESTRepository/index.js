export default function RESTRepository ({ httpClient }) {
  return {
    async getSingle (idOrName) {
      const pokemon = await httpClient(`pokemon/${idOrName}`)
      return pokemon
    }
  }
}
