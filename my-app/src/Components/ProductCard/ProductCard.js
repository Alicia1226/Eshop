import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './ProductCard.css';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: '4%',
    marginTop: '5%',
    display: "flex",
    justifyContent: "center"
  },
  media: {
    height: 300,
  },
});

function ProductCard(props) {
  const classes = useStyles();
    console.log('props',props.products)
  return( 
    <Grid item xs={12}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/contemplative-reptile.jpg"
          image= {props.products.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.products.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Precio: {props.products.Price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Rating: {props.products.Rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductCard;

    
//   const prueba=()=>{
// return producto.map((i,index)=><img src ={i.img}/>)
//   }
  
//   return (
//   <div>
// {prueba()}
//   </div>