import React, { useState,useEffect } from "react";
import ProductList from "../ProductList";
import { TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Buttons from '../Buttons';
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
            let res = await axios.get(`http://localhost:3001/api/${prodName}`)
            setProductoInfo(res.data)
            console.log(res.data)
        }
    }
    // const searchProd = async() =>{
    //     console.log('product',prodName)
            
    // }

    // const fetchProducts = async () => {
    //     let res = await axios.get('http://localhost:3001/api')
    //     setProductoInfo(res.data);
    //   }
    

    useEffect(() => {
        setProdName('')
     }, [products])

    return (
        <div>
        <TextField onChange={handleOnChange} onKeyDown={onPress} id="outlined-basic" value={prodName} label="Buscar..."  variant="outlined" size="small" color="secondary"/>
        <Box m={4}/>
        <Buttons/>
        <Box m={4}/>
        <ProductList products={products}/>
        </div>  
    );
}

export default Product;
