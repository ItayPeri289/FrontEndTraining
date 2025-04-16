import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardMedia from '@mui/material/CardMedia';
import InfoIcon from '@mui/icons-material/Info';

interface StoreCard {
    imageUrl: string;
    title: string;
    description: string
    price: number;
  }

export default function AlertDialog(props: StoreCard) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color='secondary' variant="contained" onClick={handleClickOpen}>
        <InfoIcon/>
        פרטים
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby= {props.title}
        aria-describedby= {props.description}
        sx= {{textAlign: 'right'}}
      >
        <DialogTitle id='title'>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='description'>
          {props.description}
          </DialogContentText>
          <DialogContentText id='price'>
          מחיר: {props.price}₪
          </DialogContentText>
        </DialogContent>
        <CardMedia
        sx={{height: '15rem', width: '22rem' }}
        image= {props.imageUrl}
        title={props.title}
      />
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
