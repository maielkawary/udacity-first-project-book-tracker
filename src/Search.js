import { Link } from "react-router-dom";
import Book from "./components/Book";

const Search = ({books, moveToShelf, handleSearchChange ,searchInput ,handleBooksSearch ,booksFromSearch}) => { 
  return(
    <div className="search-books">
      <div className="search-books-bar">

        <Link to='/' className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearchChange}
            value={searchInput}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksFromSearch?.map((book)=>{
                return(<Book key={book.id} moveToShelf={moveToShelf} book={book}/>)
            })} 
        </ol>
      </div>
    </div>
);
  
}

export default Search;
