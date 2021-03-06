import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from "./styles"

const Cart = ({ cart }) => {
  const classes = useStyles();  
  const isEmpty = cart.line_items.length === 0;

  const EmptyCart = () => (
      <Typography variant='subtitle1'>You have no items in your shopping cart, start adding some!</Typography>
  );

  const FilledCart = () => (
      <>
        <Grid conatiner spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <div>{item.name}</div>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4' >
                Subtotal: { cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size='large' variant='contained' type='button' color='secondary'>Empty Cart</Button>
                <Button className={classes.checkoutButton} size='large' variant='contained' type='button' color='primary'>Checkout</Button>
            </div>
        </div>
      </>
  )


  
  return (
    <Container>
        <div className={classes.toolbar}></div>
        <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
        { isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart