import { useContext, useEffect, useState } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';
import {Context} from '../../context'

const App = () => {
  const [data, setData] = useState([
    {name:'Empire of Osmon', viewers: 600, favourite:false, like:false, id:1},
    {name:'Ertugrul', viewers: 755, favourite:false, like:false, id:2},
    {name:'Alpomish', viewers: 888, favourite:false, like:false, id:3},
  ])
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const {state, dispatch} = useContext(Context)

  const addForm = item => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like:false}
    const newArr = [...data, newItem]
    setData(newArr)
  }

  const updateTermHandler = (term) => {
    setTerm(term)
  }

  const updateFilterHandler = () => setFilter(filter)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
      .then(response => response.json())
      .then(json => {
        const newArr = json.map(item => ({
          name:item.title,
          id:item.id,
          viewers:item.id*10,
          favourite:false,
          like:false
        }))
        setData(newArr)
        dispatch({type:"GET_DATA", payload: newArr})
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo allMoviesCount={data.length} favouriteMovieCount={data.filter(c => c.favourite).length}/>
        <div className='search-panel'>
          <SearchPanel updateTermHandler={updateTermHandler}/>
          <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
        </div>
        <MovieList/>
        <MoviesAddForm addForm={addForm}/>.
      </div>
    </div>
  )


}

export default App;