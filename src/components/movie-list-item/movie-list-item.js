import './movie-list-item.css';

const MovieListItem = (props) => {
  const {name, viewers, onDelete, onToggleProp, like, favourite} = props;
  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}` }>
      <span onClick={onToggleProp} className='list-group-item-label' data-toggle="like">{name}</span>
      <input type="number" className="list-group-item-input" defaultValue={viewers}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button className="btn-cookie btn-sm" type='button' onClick={onToggleProp} data-toggle="favourite">
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

export default MovieListItem;