import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React, { useState,useEffect } from "react";
import ListPokemon from '../src/components/ListPokemon';
import axios from "axios";
import './ProductList.css';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: '4%',
    marginTop: '5%'
  },
  media: {
    height: 140,
    
  },
});



export default function ProductList() {
  const classes = useStyles();

  function ProductList() {
    const[prodName,setProdName] = useState('')
    const [producto, setProductoInfo] = useState([])
    
  
    const prodFetch = async event => {
      // event.preventDefault();
      let res = await axios.get(`https:/localhost:3000/}`)
      setProductoInfo([res.data])
      console.log(res.data)
    }

    const handleOnChange = (e) => {
      console.log(e.target.value)
      setProdName(e.target.value);
    };


    useEffect(() => {
      if(prodName){
        prodFetch()
      }
    },
      [prodName])
    
  
    const renderProd = () => {
  
      if (producto.length) {
        return<ListPokemon producto={producto}/>
      }
    }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Heura
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Precio: 5€
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}