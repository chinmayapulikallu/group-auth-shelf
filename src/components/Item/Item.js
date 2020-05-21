import React, { Component } from 'react';
import { connect } from "react-redux";

class Item extends Component {

    render() {
      return (
       <>

        <h3>{this.props.item.description}</h3>
        <img src={this.props.item.image_url} alt={this.props.item.description} height='100px'></img>
       </>
      );
    }
  }
  


  const reduxStateToProps = (reduxState) => ({ reduxState });

  export default connect(reduxStateToProps)(Item);
