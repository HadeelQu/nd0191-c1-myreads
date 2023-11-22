import { useLocation } from "react-router-dom";

const Book = ({ book, changeShelf, findBookShelf, setBooks, books }) => {
  let location = useLocation();

  const handleShelfChange = (selectedShelf) => {
    if (location.pathname === "/") {
      // If the book is in search, update its shelf
      changeShelf(book, selectedShelf);
    } else {
      // If not in search, update the book's shelf and add it to the books state
      const updatedBook = { ...book, shelf: selectedShelf };
      setBooks((prevBooks) => [...prevBooks, updatedBook]);
    }
  };

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={findBookShelf(book.id) || "none"}
              onChange={(e) => handleShelfChange(e.target.value)}
            >
              <option value="move" disabled>
                {location.pathname === "/search" ? "Add to..." : "Move to..."}
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors &&
          Array.isArray(book.authors) &&
          book.authors.map((author) => (
            <div className="book-authors" key={author}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;
