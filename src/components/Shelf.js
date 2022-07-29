import Book from "./Book";

const Shelf = ({ moveToShelf, booksState, books, shelfName}) => {
 
  return(
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books?.filter((book)=>{
               return(book.shelf === booksState);
                }).map(book => {
                return(
                  <Book moveToShelf={moveToShelf} book={book}/>
                );
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Shelf;