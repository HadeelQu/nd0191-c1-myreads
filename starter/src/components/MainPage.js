import { useState } from "react";
import Book from "./Book";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const MainPage = ({booksCurrentlyReading,booksWantToRead, booksRead, changeShelf, findBookShelf}) => {
    // const [showSearchPage, setShowSearchpage] = useState(false);
    let navigate = useNavigate();
    return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
        
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              { booksCurrentlyReading.map((b) => ( <Book key={b.id} book={b} changeShelf={changeShelf}  findBookShelf={findBookShelf}/>))}
              
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            { booksWantToRead.map((b) => ( <Book key={b.id} book={b} changeShelf={changeShelf} findBookShelf={findBookShelf}/>))}
  
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            { booksRead.map((b) => ( <Book  key={b.id} book={b} changeShelf={changeShelf} findBookShelf={findBookShelf}/>))}
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>);
    
}
export default MainPage ;