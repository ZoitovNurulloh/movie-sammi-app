import './movie-list-item.css';
import {Component} from 'react';

class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {favourite: false, like:false}
  }

  onFavourite = () => {
    this.setState(({favourite}) => ({
      favourite: !favourite
    }))
  }

  onLike = () => {
    this.setState(({like}) => ({
      like : !like
    }))
  }
  render() {
    const {name, viewers, onDelete} = this.props;
    const {favourite, like} = this.state
    return (
      <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}` }>
        <span onClick={this.onLike} className='list-group-item-label'>{name}</span>
        <input type="number" className="list-group-item-input" defaultValue={viewers}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button className="btn-cookie btn-sm" type='button' onClick={this.onFavourite}>
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" type='button'>
            <i className="fas fa-trash" onClick={onDelete}></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>

  )
}
}

// const MovieListItem = ({name, viewers, favourite}) => {
//   return (
//     <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
//       <span className='list-group-item-label'>{name}</span>
//       <input type="number" className="list-group-item-input" defaultValue={viewers}/>
//       <div className='d-flex justify-content-center align-items-center'>
//         <button className="btn-cookie btn-sm" type='button'>
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button className="btn-trash btn-sm" type='button'>
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   )
// }

export default MovieListItem;