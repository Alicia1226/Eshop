import React from 'react';
import SearchProduct from '../Buttons';
import ProductList from '../ProductList/ProductList';
import Grid from '@material-ui/core/Grid';
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
                <Route path="/" component={ProductList} exact/>
            </Switch>
      </div>
    );

}

export default Main;