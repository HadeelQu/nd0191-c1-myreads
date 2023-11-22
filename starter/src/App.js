import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./components/Book";
import { Route, Routes, useNavigate , useLocation} from "react-router-dom";
import MainPage from "./components/MainPage";
import Search from "./components/Search";


function App() {
  let navigate = useNavigate();
  let location = useLocation();
  // const [showSearchPage, setShowSearchpage] = useState(false);
  const [shelf, setShelf] = useState("none")
  const [books , setBooks] = useState([])
  const findBookShelf = (id) => {
    const book = books.find((b) => b.id === id);
  
    if (book) {
      return book.shelf;
    } else {
      return "none";
    }
  };
  
  useEffect(() => {
    const getBooks = async() => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();
   

  },[])

  const changeShelf = async (book, shelf) => {
    try {
      // const index = books.findIndex((b) => b.id === book.id);
  
      // if (index === -1) {
      //   setBooks(
      //     books.map((b) => (b.id === book.id ? book : b))
      //   );
      
      // } else {
        // Book found, update its shelf
        await BooksAPI.update(book, shelf);
        const bookUpdated = await BooksAPI.get(book.id);
  
        setBooks(
          books.map((b) => (b.id === bookUpdated.id ? bookUpdated : b))
        );
      //}
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  


  const booksCurrentlyReading = books.filter((b) => b.shelf === "currentlyReading");
  const booksWantToRead = books.filter((b) => b.shelf === "wantToRead");
  const booksRead = books.filter((b) => b.shelf === "read");



  return (
    <div className="app">
<Routes>
  <Route exact path="/" element={<MainPage booksCurrentlyReading={booksCurrentlyReading} booksWantToRead= {booksWantToRead} booksRead={booksRead} changeShelf = {changeShelf} findBookShelf={findBookShelf}/>}/>
  <Route exact path="/search" element={<Search changeShelf = {changeShelf} books={books} findBookShelf={findBookShelf} setBooks={setBooks}/>}/>

 
</Routes>
    </div>
  );
}

export default App;
