import React from 'react';
import { TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import './Header.css';

export default function Header() {
 
    return (
      <div>
        <h1>
          Eshop
        </h1>
        <div>
          <TextField id="outlined-basic" label="Buscar..." variant="outlined" size="small"/>
          <Box m={4}/>
        </div>  
      </div>
    );
  }
