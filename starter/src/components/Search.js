import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";


const Search = ({changeShelf, findBookShelf, books ,setBooks }) => {
   
    // const addBook = (book) => {
    //   const newBooks = books.concat(book);
    //   setBooks(newBooks);

    // }
    let navigate = useNavigate();
    const [query, setQuery] = useState("")
    const [searchResult , setSearchResult] = useState([])

    useEffect(() =>  { 
        try {
            const searchBooks = async () => {
                const results = await BooksAPI.search(query); 
                if (results && Array.isArray(results)) {
                    setSearchResult(results);
                  } else {
                    // If not an array (e.g., an error response), set to an empty array
                    setSearchResult([]);
                  }
    
            }
            if(query.trim !== ""){
                searchBooks();
                console.log(searchResult)
            }
            else{
                setSearchResult([]);
            }
            
        } catch (error) {
            console.log(error);
            
        }
       


    }, [query])

    return (<div className="search-books">
    <div className="search-books-bar">
      <a
        href="#"
        className="close-search"
        onClick={() => navigate("/")}
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={(e) => setQuery(e.target.value)  }
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">

    { searchResult.map((b) => ( <Book key={b.id} book={b} changeShelf={changeShelf} findBookShelf={findBookShelf} setBooks={setBooks} books ={books}/>))}
            </ol>
    </div>
  
  </div>

  
  );
  

    
}
export default Search ;