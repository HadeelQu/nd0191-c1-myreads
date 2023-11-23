import { useState } from "react";
import Book from "./Book";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import BookShelf from "./BookShelf";

const MainPage = ({booksCurrentlyReading ,booksWantToRead ,booksRead , changeShelf, findBookShelf}) => {
    // const [showSearchPage, setShowSearchpage] = useState(false);
    let navigate = useNavigate();
    return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
        
      <div>
        
      <BookShelf books={booksCurrentlyReading} changeShelf={changeShelf} findBookShelf={findBookShelf} title="Currently Reading" />
          <BookShelf books={booksWantToRead} changeShelf={changeShelf} findBookShelf={findBookShelf} title="Want to Read" />
          <BookShelf books={booksRead} changeShelf={changeShelf} findBookShelf={findBookShelf} title="Read" />
        
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>);
    
}
export default MainPage ;