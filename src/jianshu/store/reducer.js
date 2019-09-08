import { SEARCH_FOCUS } from './actionTypes'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  debugger
  if (action.type === SEARCH_FOCUS) { return state }
  return state
}
