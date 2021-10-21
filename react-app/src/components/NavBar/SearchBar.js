import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function SearchBar() {
  return (
    <>
    <FontAwesomeIcon icon={faSearch} />
    <input id="search-bar" type="search" placeholder="Search Viora">
    </input>
    </>
  )
}
