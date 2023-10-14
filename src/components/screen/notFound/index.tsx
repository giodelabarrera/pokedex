import EmptyPokeball from './emptyPokeball'
import './index.css'

const baseClass = 'pk-ScreenNotFound'

export default function ScreenNotFound() {
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>404</h1>
      <div className={`${baseClass}-description`}>
        <h2>Page not found!</h2>
        <p>
          Sorry! The page you're looking for is not here and there's not even a
          zubat or diglett in sight.
        </p>
      </div>
      <div className={`${baseClass}-imageContainer`}>
        <EmptyPokeball />
      </div>
    </div>
  )
}
