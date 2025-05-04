import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import useCartStore from '../store/cartStore';
import Button from '@mui/material/Button';

export default function InteractiveList() {

const itemsArray = useCartStore((state) => state.itemsArray);
const removeItemByIndex = useCartStore((state) => state.removeItem);
const cartItemsPrice = useCartStore((state) => state.cartItemsPrice);
const balance = useCartStore((state) => state.balance);

const canPurchase = () => {
  if (balance >= cartItemsPrice)
    removeAllItemsFromCart();
  
}

const removeAllItemsFromCart = async () => {
  const removeArray = itemsArray;
  removeArray.map((_, index) => {
   removeItemByIndex(index);
  });
}

  if(itemsArray.length == 0)
    return <div style ={{display: 'flex', justifyContent: 'center'}}>העגלה ריקה</div>;
  
  return( 
  <Box>
  <div style ={{display: 'flex', justifyContent: 'center'}}><Button variant="contained" onClick={canPurchase}>הזמן {cartItemsPrice}₪</Button></div>
    {itemsArray.map((item, index) =>
    <Box>
        <Grid size={{ xs: 6, md: 8 }} >
            <List>
                <ListItem
                  secondaryAction={
                    <Box sx={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <ListItemText sx={{textAlign: 'right'}}
                    primary={item.title}
                    secondary={`${item.price}₪`}
                  />
                    <ListItemAvatar>
                    <Avatar>
                      <img src ={item.imageUrl} width={'45rem'}/>
                    </Avatar>
                  </ListItemAvatar>
                  </Box>
                  }
                >
                    <IconButton onClick={() => removeItemByIndex(index)}edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                </ListItem>
            </List>
        </Grid>
    </Box>
  )}
  </Box>
);
}