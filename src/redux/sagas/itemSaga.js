import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItem() {
  try{
   const response = yield axios.get('/api/shelf');
   yield put({type: 'SET_ITEM', payload: response.data})
  } catch(err){
    console.log(err)
  }
}

function* itemSaga() {
  yield takeLatest('GET_ITEM', fetchItem);
}

export default itemSaga;