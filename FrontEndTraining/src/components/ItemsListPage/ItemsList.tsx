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
import useCartStore from '../../store/cartStore';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function ItemsList () {
    
const itemsArray = useCartStore((state) => state.itemsArray);   
const removeItemByIndex = useCartStore((state) => state.removeItem); 
  return (
    <Box>
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
                        <IconButton edge="end" aria-label="delete" onClick={() => removeItemByIndex(index)}>
                          <DeleteIcon />
                        </IconButton>
                    </ListItem>
                </List>
            </Grid>
        </Box>
      )
    }
    </Box>
    );
}