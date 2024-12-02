import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name:'Empire of Osmon', viewers: 600, favourite:false, id:1},
        {name:'Ertugrul', viewers: 222, favourite:false, id:2},
        {name:'Alpomish', viewers: 442, favourite:true, id:3},
      ],
    }
  }

  onDelete = (id) => {
    this.setState(({data}) => ({
        data: data.filter(item => item.id !== id)
    }))
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
          <MovieList data={data} onDelete={this.onDelete}/>
          <MoviesAddForm/>.
        </div>
      </div>
    )
  }
}

export default App;