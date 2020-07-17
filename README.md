# Pokedex

## Structure

components
  ui
    button
    chip
    dialog
    drawer  
    popover
    selectDrawer
    selectPopover
    toggleTheme
  shell
    filterBar
    footer
    header
  pokemon
    attributes
    card
    description
    evolutions
    stats
    type
    types
    weaknesses
domain
screens
  not-found
  pokemon
  pokemon-list
  no-results
index.js

## Use cases

- get_list_pokemon_use_case
  - params
    - query?: string (nombre o numero)
    - type?: string[] (electrico, bicho, volador) = []
    - sort?: string (a-z, z-a, numero superior, numero inferior) = numero superior
    - limit?: number (numero de resultados a traer) = 25
    - offset?: number (indice de paginacion) = 0

- get_single_pokemon_use_case
  - params
    - slug: string (nombre o numero)

- get_types_pokemon_use_case

## Pages

- detail
poked.es/p/totodile
poked.es/p/charmander

- home|search
poked.es?q=pikachu  // query
poked.es?q=25
poked.es?t=electrico  // type
poked.es?t=electrico,bicho
poked.es?s=az // sort
poked.es?s=za
poked.es?s=ns
poked.es?s=ni
poked.es?o=2  // offset
poked.es?t=electrico&s=az&o=4  // full