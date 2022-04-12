import React, { useEffect, useState }from 'react';
import './App.css';
import {Products, NavBar, Cart } from './components';
import {commerce} from './lib/commerce'


const App = () => {
const [products, setProducts] =useState([]);
const [cart, setCart] = useState({})

const fetchProducts = async () => {
  const { data } = await commerce.products.list();
  setProducts(data);
}

const fetchCart = async () => {
  const cart = await commerce.cart.retrieve();
  setCart(cart);
}

const handleAddToCart = async (productId, quantity) => {
  const item = await commerce.cart.add(productId, quantity);
  setCart(item.cart)
}

useEffect(() => {
  fetchProducts();
  fetchCart();
}, []);

// console.log(products);
console.log(cart);

  return (
    <div>
      <NavBar totalItems={cart.total_items}/>
      {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
      <Cart cart={cart}/>
    </div>
  );
}

export default App;
