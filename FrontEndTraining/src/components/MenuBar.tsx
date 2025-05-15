import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartBadge from "./ShoppingCartBadge";
import useCartStore from "../store/cartStore";

export default function MenuBar() {
  const balance = useCartStore((state) => state.balance);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <ShoppingCartBadge />
        </IconButton>
        <Typography
          variant="h6"
          align="right"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          {balance}₪ :סכום כולל
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
