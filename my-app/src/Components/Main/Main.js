import React, { Component } from 'react';
import SearchProduct from '../Buttons';
import ProductList from '../ProductList/ProductList';
import './Main.css';

class Main extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <SearchProduct/>
        <ProductList/>
      </div>
    );
  }
}

export default Main;