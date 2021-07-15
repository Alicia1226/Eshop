import React, { useState,useEffect } from "react";
import ProductList from "../ProductList";
import { TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import axios from "axios";
import './Product.css';

const Product=()=>{
    const[prodName,setProdName] = useState('')
    const [products, setProductoInfo] = useState([])

    const handleOnChange = (e) => {
        setProdName(e.target.value);
    };

    const onPress = async (e) => {
        if (e.keyCode===13){
          let res = await axios.get(`/api/${prodName}`)
          setProductoInfo(res.data)
          console.log(res.data)
        }
    }

    // useEffect(() => {
    // // if(prodName){
    //     prodFetch()
    // // }
    // },
    // [])
    return (
        <div>
        <TextField onChange={handleOnChange} onKeyDown={onPress} id="outlined-basic" label="Buscar..." value={prodName} variant="outlined" size="small"/>
        <Box m={4}/>
        <ProductList products={products}/>
        </div>  
    );
}

export default Product;
