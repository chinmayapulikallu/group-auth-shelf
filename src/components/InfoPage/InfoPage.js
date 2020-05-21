import React, { Component } from 'react';
import { connect } from "react-redux";

import Item from '../Item/Item.js'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  componentDidMount(){
        this.props.dispatch({type:"GET_ITEM"})
    }

  render() {
    return(
        <div>
          <p>
            Shelf Page
          </p>
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

