import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardMedia from '@mui/material/CardMedia';
import InfoIcon from '@mui/icons-material/Info';
import useCartStore from '../store/cartStore';

interface handleThings{
    handleClose: () => void;
}

export default function BuyDialog(props: handleThings) {


  return (
    <React.Fragment>
              <Dialog
              open={true}
              onClose={props.handleClose}
              sx= {{textAlign: 'right', width: '25rem', margin:'auto'}}
            >
              <DialogContent>
                <DialogContentText id='description'>
                  תתחדש/י!
                </DialogContentText>
              </DialogContent>
              <DialogActions sx= {{display: 'flex', justifyContent: 'left'}}>
                <Button onClick={props.handleClose}>סגור</Button>
              </DialogActions>
            </Dialog>
    </React.Fragment>
  );
}
