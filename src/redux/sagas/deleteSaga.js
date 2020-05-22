import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* deleteItemSaga(action) {
console.log(action.payload);
  try{
   yield axios.delete(`/api/shelf/${action.payload}`);
  } catch(err){
    console.log(err)
  }
}

function* itemSaga() {
  yield takeLatest('DELETE_ITEM', deleteItemSaga);
}

export default itemSaga;