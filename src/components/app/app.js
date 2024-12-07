import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name:'Empire of Osmon', viewers: 600, favourite:false, like:false, id:1},
        {name:'Ertugrul', viewers: 222, favourite:false, like:false, id:2},
        {name:'Alpomish', viewers: 442, favourite:false, like:false, id:3},
      ],
    }
  }

  onDelete = (id) => {
    this.setState(({data}) => ({
        data: data.filter(item => item.id !== id)
    }))
  }

  addForm = ( item) => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like:false}
    this.setState(({data}) => ({
        data: [...data, newItem],
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => {
      return {
        data: data.map(item => {
          if (item.id ===id) {
            return {...item, [prop]: !item[prop]}
          }
          return item;
        }),
      }
    })
  }

  render() {
    const {data} = this.state;
    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo/>
          <div className='search-panel'>
            <SearchPanel/>
            <AppFilter/>
          </div>
          <MovieList onToggleProp={this.onToggleProp} data={data} onDelete={this.onDelete}/>
          <MoviesAddForm addForm={this.addForm}/>.
        </div>
      </div>
    )
  }
}

export default App;