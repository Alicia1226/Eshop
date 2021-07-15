import React from 'react';
import Buttons from '../Buttons';
import Product from '../Product/Product';
// import Grid from '@material-ui/core/Grid';
import './Main.css';
import { Route, Switch } from 'react-router-dom';

const Main=()=> {
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


    return (
      <div>
        {/* <SearchProduct/>
        <Grid xs={16}>
          <ProductList/>
        </Grid> */}
        <Switch>
          <Route path="/" component={Product} exact/>
        </Switch>
        <Buttons/>
      </div>
    );

}

export default Main;