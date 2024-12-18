import '../app-filter/app-filter.css';

const AppFilter = ({updateFilterHandler, filter}) => {
  return <div className="btn-group">
    {btnsArr.map(btn => (
      <button key={btn.name} className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => updateFilterHandler(btn.name)} >{btn.label}</button>
    ))}
    {/* <button className="btn btn-outline-dark">Mashhur kinolar</button>
    <button className="btn btn-outline-dark">Eng ko'p korilgan kinolar</button> */}
  </div>
}

const btnsArr = [
  {name: "all", label: "Barcha kinolar"},
  {name: "popular", label: "Mashhur kinolar"},
  {name: "mostViewers", label: "Eng ko'p korilgan kinolar"},
]

export default AppFilter;