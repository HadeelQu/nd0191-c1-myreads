import Book from "./Book"

const BookShelf = ({books,changeShelf,findBookShelf , title }) => {
    if (!Array.isArray(books)) {
        console.error("Books is not an array:", books);
        return null; 
      }
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((b) => ( <Book key={b.id} book={b} changeShelf={changeShelf}  findBookShelf={findBookShelf}/>))}
            
          </ol>
        </div>
        </div>
    );

}
export default BookShelf;