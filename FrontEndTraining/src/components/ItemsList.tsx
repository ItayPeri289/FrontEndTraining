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
import { useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import LinearDeterminate from './ProgressBars/LinearDeterminate';
import SnackbarContent from '@mui/material/SnackbarContent';
import BuyDialog from './BuyDialog';
import AlertDialog from './AlertDialog';
import { Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface State extends SnackbarOrigin {
  open: boolean;
}

export default function InteractiveList() {

const itemsArray = useCartStore((state) => state.itemsArray); // all in the same
const removeItemByIndex = useCartStore((state) => state.removeItem);
const cartItemsPrice = useCartStore((state) => state.cartItemsPrice);
const balance = useCartStore((state) => state.balance);
const reduceBalance = useCartStore((state)=> state.reduceBalance);
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

const [state, setState] = React.useState<State>({
  open: false,
  vertical: 'top',
  horizontal: 'center',
});
const { vertical, horizontal, open } = state;

const [openAlertDialog, setOpenAlertDialog] = useState(false);


const handleClick = (newState: SnackbarOrigin) => {
  if (balance >= cartItemsPrice)
  {
    setState({ ...newState, open: true });
    removeAllItemsFromCart();
  }
}

const handleClose = () => {
  setOpenAlertDialog(false);
};

const removeAllItemsFromCart = async () => {
  await sleep(1000);
  reduceBalance(itemsArray[0].price);
  while(itemsArray.length > 0)
  {
    removeItemByIndex(0);
    reduceBalance(itemsArray[0].price);
    await sleep(1000);
  }
  };

  if(itemsArray.length == 0)
  {
    
    return(
    <div style ={{display: 'flex', justifyContent: 'center'}}>
     <div> העגלה ריקה</div>

     {openAlertDialog && 
      <BuyDialog handleClose={handleClose}/>
        }
      </div>
    )
  }

  const itemsNumber = itemsArray.length;

  return( 
  <Box>
  <div style ={{display: 'flex', justifyContent: 'center'}}><Button variant="contained" onClick={() => handleClick({ vertical: 'top', horizontal: 'center' })}>הזמן {cartItemsPrice}₪</Button></div>
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
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                </ListItem>
            </List>
        </Grid>
    </Box>
  )}

<Snackbar
  anchorOrigin={{ vertical, horizontal }}
  open={open}
  key={vertical + horizontal}
>
  <Box
    sx={{
      backgroundColor: 'white',
      padding: 2,
      width: '20rem',
    }}
  >
    <LinearDeterminate itemsAmount={itemsNumber} setOpenAlertDialog={setOpenAlertDialog} />
  </Box>
</Snackbar>

  </Box>
);
}