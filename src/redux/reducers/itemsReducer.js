

const itemsReducer = (state = [], action) =>{
  if(action.type === 'SET_ITEM'){
    console.log(action.payload);
    return action.payload
   
  } else {
    return state
  }
  
}

export default itemsReducer;