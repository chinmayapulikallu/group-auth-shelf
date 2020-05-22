import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editItemSaga(action) {
  try{
    const id = action.payload.id  
   const response = yield axios.put(`/api/shelf/${id}`, action.payload);
   yield put({type: 'SET_ITEM', payload: action.payload.description })
  } catch(err){
    console.log(err)
  }
}

function* itemSaga() {
  yield takeLatest('EDIT_ITEM', editItemSaga);
}

export default itemSaga;