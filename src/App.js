import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from './BooksAPI'
import Search from "./Search";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);
  const [booksFromSearch, setBooksFromSearch] = useState([]);


  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setBooks(res);
    })
    
    
  },[]);


  const moveToShelf = async(book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      setBooks(res);
    });
  };

  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    handleBooksSearch(searchInput);
  }

  useEffect(() => {
    
      BooksAPI.search(searchInput).then((res) => {
        setBooksFromSearch(res);
      })
    }
    
  ,[searchInput, booksFromSearch]);

  

  const handleBooksSearch = (search) => {
     BooksAPI.search(search).then((res) => {
        setBooksFromSearch(res);
        console.log(res)
    })
  }


  
  return (
    <Routes>
      <Route exact path="/" element={<HomePage moveToShelf={moveToShelf} books={books}/>}/>
      <Route path="/Search" element={<Search books={books} moveToShelf={moveToShelf} handleSearchChange={handleSearchChange} searchInput={searchInput} handleBooksSearch={handleBooksSearch} booksFromSearch={booksFromSearch}/>} />
    </Routes>
  );
}

export default App;
