import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ShoppingCartBadge({itemsAmount}: {itemsAmount: number}) {
  return (
    <Badge badgeContent={itemsAmount} color='warning'>
      <ShoppingCartIcon color="action" />
    </Badge>
  );
}