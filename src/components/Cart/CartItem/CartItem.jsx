import React from 'react'
import {Typhography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles'

const CartItem = () => {
  const classes = useStyles();
  return (
    <Card>
        <CardMedia image={item.media}/>
    </Card>
  )
}

export default CartItem