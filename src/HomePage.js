import Shelf from "./components/Shelf";
import { Link } from "react-router-dom";

const HomePage = ({ moveToShelf, books}) => {
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf moveToShelf={moveToShelf} booksState={'currentlyReading'} shelfName={'Currently Reading'} books={books} />
            <Shelf moveToShelf={moveToShelf} booksState={'wantToRead'} shelfName={'Want to Read'} books={books} />
            <Shelf moveToShelf={moveToShelf} booksState={'read'} shelfName={'Read'} books={books} />
          </div>
          <div className="open-search">
            <Link to="/Search">Add a book</Link>
          </div>
        </div>
    );
}

export default HomePage;