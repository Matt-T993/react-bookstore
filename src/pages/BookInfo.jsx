import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import BestBooks from "../components/ui/BestBooks";

const BookInfo = ({ books, addItemToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  const addBookToCart = (book) => {
    addItemToCart(book);
  };

  const bookExistsOnCart = () => {
    return cart.find(book => book.id === +id);
  }



  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--img">
                <img className="book__selected--img" src={book.url} alt=" " />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                  {bookExistsOnCart() ? (
                    <Link to={"/cart"} className="book__link">
                    <button className="btn">Checkout</button>
                    </Link>
                  ) : (
                    <button className="btn" onClick={() => addBookToCart(book)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="book__selected--title--top">Recommeded Books</h2>
            </div>
            <BestBooks books={books} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
