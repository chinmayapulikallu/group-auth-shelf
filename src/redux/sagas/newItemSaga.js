import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addItem(action) {
  try{
   yield axios.post('/api/shelf', {description: action.payload.item_description, image_url: action.payload.item_image, user_id: action.payload.user_id});
   yield put({type: 'ADD_ITEM', payload:  [action.description, action.image_url, action.user_id ]})
  } catch(err){
    console.log(err)
  }
}

function* newItemSaga() {
  yield takeLatest('addItem', addItem);
}

export default newItemSaga;

