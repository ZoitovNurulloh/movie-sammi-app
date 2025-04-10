import { useContext } from 'react';
import './movie-list-item.css';
import { Context } from '../../context';

const MovieListItem = (props) => {

  const {state, dispatch} = useContext(Context)

  const  onToggleProp = (e) => {
    const payload = {
      id,
      prop:  e.currentTarget.getAttribute('data-toggle')
    }
    dispatch({type: "ON_TOGGLE_PROP", payload})
  }

  const onDelete = () => {
    dispatch({type: "ON_DELETE", payload:id})
  }
  const {name, viewers, like, favourite, id} = props;
  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}` }>
      <span onClick={onToggleProp} className='list-group-item-label' data-toggle="like">{name}</span>
      <input type="number" className="list-group-item-input" defaultValue={viewers}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button className="btn-cookie btn-sm" type='button' onClick={onToggleProp} data-toggle="favourite">
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" type='button' onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
)
}

export default MovieListItem;