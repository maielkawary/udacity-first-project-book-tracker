const Book = ({book, moveToShelf}) => {
    let cond = book.imageLinks.smallThumbnail;
    return(<li key={book.id}>
        <div className="book">
        <div className="book-top">
            <div
            className="book-cover"
            style={{
                width: 128,
                height: 193,
                backgroundImage:cond===null?`''`:
                `url(${book.imageLinks.smallThumbnail})`,
            }}
            ></div>
            <div className="book-shelf-changer">
            <select id={book.id} defaultValue='none' value={book.shelf} onChange={(event)=>{moveToShelf(book, event.target.value)}}>
                <option value="none" disabled>
                Move to...
                </option>
                <option value="currentlyReading">
                Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none" >None</option>
            </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        </div>
    </li>)
}

export default Book;
