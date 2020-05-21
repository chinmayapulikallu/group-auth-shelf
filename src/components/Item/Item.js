import React, { Component } from 'react';
import { connect } from "react-redux";

class Item extends Component {


  
    
    render() {
      return (
       <>
        <img src={this.props.item.image_url} alt={this.props.item.description}></img>
        <h3>{this.props.item.description}</h3>
       </>
      );
    }
  }
  


  const reduxStateToProps = (reduxState) => ({ reduxState });

  export default connect(reduxStateToProps)(Item);
