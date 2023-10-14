import SearchIcon from './searchIcon'
import './index.css'

const baseClass = 'pk-SharedHeader-search'

type SearchProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function Search({ value = '', placeholder, onChange }: SearchProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

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
