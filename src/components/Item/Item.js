import React, { Component } from 'react';
import { connect } from "react-redux";



class Item extends Component {

  deleteItem = () =>{
    console.log("in delete item");
    if (this.props.reduxState.user.id === this.props.item.user_id){
      this.props.dispatch({type: 'DELETE_ITEM', payload: this.props.item.id })
      console.log('matched')
    }else {
      alert("You are not authorized to delete this item!");
    }
    this.props.dispatch({type:"GET_ITEM"})
    }

    render() {
      return (
       <>

        <h3>{this.props.item.description}</h3>
        <img src={this.props.item.image_url} alt={this.props.item.description} height='100px'></img>
        <button onClick={this.deleteItem}>Delete Item</button>
       </>
      );
    }
  }
  


  const reduxStateToProps = (reduxState) => ({ reduxState });

  export default connect(reduxStateToProps)(Item);
