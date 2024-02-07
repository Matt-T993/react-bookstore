
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import {books} from "./data";
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';



function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (book) => {
    setCart([...cart, {...book, quantity: 1}])
  }
  const changeQuantity = (book, quantity) => {
    setCart(
      cart.map((item) => 
      item.id === book.id
        ? {
          ...item,
          quantity: +quantity
        }
        : item
    )
    );
        }
    const removeItem = (item) => {
      setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));

    }
    const numberOfItems = () => {
      let counter = 0;
      cart.forEach((item) => {
        counter += +item.quantity;
      });
      return counter;
    }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()}/>
      <Routes>
      <Route path='/' element={<Home books={books}/>} />
      <Route path='/books' element={<Books books={books}/>}/>
      <Route path='/books/:id' element={<BookInfo cart={cart} addItemToCart={addItemToCart}  books={books}/>}/>
      <Route path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />}/>
    
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
