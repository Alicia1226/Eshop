import React, { Component } from 'react';
import SearchProduct from '../Buttons';
import ProductList from '../ProductList/ProductList';
import Grid from '@material-ui/core/Grid';
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
        <Grid xs={16}>
          <ProductList/>
        </Grid>
        
      </div>
    );
  }
}

export default Main;