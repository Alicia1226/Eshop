import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './ProductCard.css';


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

function ProductCard(props) {
  const classes = useStyles();
    
  return( 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/contemplative-reptile.jpg"
          // image= {producto[0].img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.products.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Precio: 5€
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
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