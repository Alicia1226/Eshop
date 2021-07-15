import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './Buttons.css';

class SearchProduct extends Component {
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
        <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
          <Button>Precio</Button>
          <Button>Nombre</Button>
          <Button>Relevancia</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default SearchProduct;