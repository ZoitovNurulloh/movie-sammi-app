import { useState } from 'react';
import '../search-panel/search-panel.css'

const SearchPanel = ({updateTermHandler}) => {
  const [term, setTerm] = useState('')

  const updateTermHandlerSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term)
    updateTermHandler(term)
  }

  return (
    <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish"
    onChange={updateTermHandlerSearch} value={term} />
  )
}

export default SearchPanel;