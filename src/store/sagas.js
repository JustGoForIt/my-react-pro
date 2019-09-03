import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_TODO_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function * getTodoList () {
  // axios.get('./list').then((resp) => {
  // 	const data = resp.data
  // 	const action = initListAction(data)
  // 	// 把数据更新到store
  // 	put(action)
  // })
  try {
  	const res = yield axios.get('./list')
  	const action = initListAction(res.data)
  	yield put(action)
  } catch (e) {
  	console.log('./list接口请求失败')
  }
}

function * mySaga () {
  yield takeEvery(GET_TODO_LIST, getTodoList)
}
export default mySaga
