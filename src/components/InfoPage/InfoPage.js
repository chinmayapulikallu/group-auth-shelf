import React, { Component } from 'react';
import { connect } from "react-redux";

import Item from '../Item/Item.js'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  state = {
    item_description: '',
    item_image: ''
  }

  componentDidMount(){
        this.props.dispatch({type:"GET_ITEM"})
    }
    
  handleChange = (event, property) => {
    switch (property) {
      case 'item_description':
        return this.setState({
          [property]: event.target.value
        })
        case 'item_image':
        return this.setState({
          [property]: event.target.value
        })
        default:
          return this.state
    }
  }
  
  handleClick = () => {
    console.log(this.state)
    this.props.dispatch({type: 'addItem', payload: this.state})
    this.props.dispatch({type:"GET_ITEM"})
  }

  render() {
    return(
        <div>
          <h3>Add new Item</h3>
          <input placeholder="item name" type="text" onChange={(event) => this.handleChange(event, "item_description")}/>
          <input placeholder="item picture" type="text" onChange={(event) => this.handleChange(event, "item_image")}/>
          <button onClick={this.handleClick}>Add Item</button>
          <h1>
            Shelf
          </h1>
          <ul> 
              {this.props.reduxState.itemsReducer.map((item) => {
                return (
                  <Item item={item} key={item.id} />
                )
              })}
          </ul>
        </div>
   )
  };
};

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(InfoPage);

