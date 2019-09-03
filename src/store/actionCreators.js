import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST, GET_TODO_LIST } from './actionTypes'
import axios from 'axios'
export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}

export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}

export const initListAction = (data) => {
  return {
    type: INIT_LIST,
    data
  }
}

// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('./list.json').then((res) => {
//       // const data = res.data

//     }, () => {
//     	const data = ['学英语']
//     	const action = initListAction(data)
//     	dispatch(action)
//     })
//   }
// }

export const getTodoList = () => ({
  type: GET_TODO_LIST
})
