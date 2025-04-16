import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AlertDialog from './AlertDialog';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

interface StoreCard {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export default function MediaCard(props: StoreCard) {
  return (
    <Card sx={{ width: '18rem', height: '19rem'}}>
      <CardMedia
        sx={{ height: '8rem' }}
        image= {props.imageUrl}
        title={props.title}
      />
      <CardContent sx={{textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1.1rem'}}>
          {props.price}₪
        </Typography>
      </CardContent>
      <CardActions>
      <AlertDialog imageUrl={props.imageUrl} title= {props.title} description={props.description} price ={props.price}/>
        <Button variant="contained"><ShoppingCartIcon/>הוסף לעגלה</Button>
      </CardActions>
    </Card>
  );
}