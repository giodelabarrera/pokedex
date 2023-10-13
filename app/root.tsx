import { type LinksFunction } from "@remix-run/node";

import appStylesHref from "./app.css";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="pk-App">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function useThemeMode() {
  return {
    themeMode: 'dark',
    setThemeMode: () => { }
  }
}

function Header() {
  const { themeMode, setThemeMode } = useThemeMode()
  // const [query = '', setQuery] = useQueryParam('query', StringParam)
  // const navigate = useNavigate()
  // const match = useMatch('/')

  // const [searchValue, setSearchValue] = useState(query)
  const searchValue = ''

  // useEffect(() => {
  //   setSearchValue(query)
  // }, [query])

  function handleThemeModeClick(themeMode) {
    setThemeMode(themeMode)
  }

  function handleSearchChange(searchValue) {
    // setSearchValue(searchValue)
  }

  function handleSearchFormSubmit(e) {
    // e.preventDefault()
    // // match if it is homepage
    // if (match) {
    //   // simply update query param
    //   setQuery(searchValue)
    // } else {
    //   // go to homepage with query param
    //   navigate(`/?query=${searchValue}`)
    // }
  }

  const baseClass = 'pk-SharedHeader'

  return (
    <header className={baseClass}>
      <div className={`${baseClass}-content`}>
        <Link to="/" className={`${baseClass}-logoContainer`}>
          <Logo />
        </Link>
        <div className={`${baseClass}-offset`} />
        <div className={`${baseClass}-searchContainer`}>
          <form
            className={`${baseClass}-searchForm`}
            onSubmit={handleSearchFormSubmit}
          >
            <Search
              value={searchValue}
              placeholder="Name or Number"
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div className={`${baseClass}-themeModeContainer`}>
          <ToggleTheme mode={themeMode} onClick={handleThemeModeClick} />
        </div>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 1024 1024"
      fill="currentColor"
    >
      <path
        strokeWidth="1"
        d="M 512.00,96.80
           C 304.28,96.94 132.17,249.33 101.24,448.41
             101.24,448.41 312.51,448.80 312.51,448.80
             339.50,364.37 418.60,303.25 512.00,303.20
             605.25,303.31 684.24,364.33 711.33,448.61
             711.33,448.61 922.53,448.80 922.53,448.80
             891.82,249.60 719.75,97.06 512.00,96.80
             512.00,96.80 512.00,96.80 512.00,96.80 Z
           M 512.00,376.80
           C 436.89,376.80 376.00,437.69 376.00,512.80
             376.00,587.91 436.89,648.80 512.00,648.80
             512.00,648.80 512.00,648.80 512.00,648.80
             587.11,648.80 648.00,587.91 648.00,512.80
             648.00,512.80 648.00,512.80 648.00,512.80
             648.00,437.69 587.11,376.80 512.00,376.80
             512.00,376.80 512.00,376.80 512.00,376.80
             512.00,376.80 512.00,376.80 512.00,376.80 Z
           M 101.47,576.80
           C 132.18,776.00 304.25,928.54 512.00,928.80
             719.72,928.66 891.83,776.27 922.76,577.19
             922.76,577.19 711.49,576.80 711.49,576.80
             684.50,661.23 605.40,722.35 512.00,722.40
             418.75,722.29 339.76,661.27 312.67,576.99
             312.67,576.99 101.47,576.80 101.47,576.80
             101.47,576.80 101.47,576.80 101.47,576.80 Z"
      />
    </svg>
  )
}

function Search({ value = '', placeholder, onChange }) {
  function handleChange(event) {
    onChange(event.target.value)
  }

  const baseClass = 'pk-SharedHeader-search'

  return (
    <div className={baseClass}>
      <SearchIcon />
      <input
        className={`${baseClass}-input`}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

function SearchIcon() {
  return (
    <svg height="20" width="20" viewBox="0 0 24 24" role="img">
      <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
    </svg>
  )
}

function ToggleTheme({ mode = 'light', onClick }) {
  const handleClick = event => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    onClick(newMode)
  }

  const ModeIcon = mode === 'light' ? MoonIcon : SunIcon

  const baseClass = 'pk-SharedHeader-toggleTheme'

  return (
    <button className={baseClass} onClick={handleClick}>
      <ModeIcon />
    </button>
  )
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="40"
      height="40"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  )
}

function SunIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  )
}
