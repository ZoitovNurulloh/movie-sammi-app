import { createContext, useReducer } from "react"

const initialValue = {
  data: [],
  term:'',
  filter: 'all'
}

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const {type, payload} = action
  switch (type) {
    case "GET_DATA":
      return {...state, data:payload}
    case "ON_DELETE":
      const deleteArr = state.data.filter(c => c.id !== payload)
      return {...state, data: deleteArr}
    case "ON_TOGGLE_PROP":
      const {id, prop} = payload
      const toglleArr = state.data.map(item => {
        if(item.id === id) {
          return {...item, [prop] : !item[prop]}
        }
        return item
      })
      return {...state, data: toglleArr}
    default:
      return {state}
  }
}

const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}

export default Provider