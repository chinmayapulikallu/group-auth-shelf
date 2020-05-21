const newItemReducer = (state = [], action) =>{
    if(action.type === 'ADD_ITEM'){
      console.log(action.payload);
      return action.payload
     
    } else {
      return state
    }
    
  }
  
  export default newItemReducer;