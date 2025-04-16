import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardMedia from '@mui/material/CardMedia';

interface StoreCard {
    imageUrl: string;
    title: string;
    description: string
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
      <Button variant="outlined" onClick={handleClickOpen}>
        פרטים
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby= {props.title}
        aria-describedby= {props.description}
      >
        <DialogTitle id={props.title}>
          {props.title}
        </DialogTitle>
        <CardMedia
        sx={{ height: 150 }}
        image= {props.imageUrl}
        title={props.title}
      />
        <DialogContent>
          <DialogContentText id={props.description}>
          {props.description}
          </DialogContentText>
        </DialogContent>
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
