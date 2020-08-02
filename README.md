<h1> <a href="https://pokedex.giodelabarrera.vercel.app" alt="Pokédex"><img src="./docs/pokeball.svg" width="24px" style="vertical-align: middle;"/> Pokédex</a> </h1>

Single Page Aplication of the characters of the Pokémon series created with React, dark/light mode, mobile first and Clean Architecture consuming data from my own [REST Pokédex API](https://github.com/giodelabarrera/pokedex-api) and compatible with IE11.

[See it online](pokedex.giodelabarrera.vercel.app)️ ↗️

## Getting Started

### Pokedex API

Run REST Pokédex API, you can follow the manual [here](#). This by default will run on port 3030.

### Pokedex

When the server is running, create a `.env` file.

```sh
touch .env
```

And set the environment variable

```env
REACT_APP_API_BASE_URL=http://localhost:3030
REACT_APP_IMAGE_BASE_URL=https://assets.pokemon.com/assets/cms2/img/pokedex
REACT_APP_INITIAL_THEME_MODE=dark
```

Install the dependencies

```sh
npm i
```

And run the development server

```sh
npm start
```

Then you should be able to open a browser at http://localhost:3000 and see the application.


## License

MIT © Giorgio de la Barrera
