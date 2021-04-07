import React, {useState} from 'react';
import './App.scss';
import {Header} from './components/Header';
import BookCard from './components/BookCards';
import {booklist} from "./util/booklist";
import Search from "./components/Search";
import Sort from "./components/Sort";
import LoginContext from "./components/LoginContext";
import CartContext from "./components/CartContext";
import {Alert, Container} from "./predefined-component";

function App() {
    const [books, setBooks] = useState(booklist);
    const [sortBy, setSortBy] = useState('Sort By');
    const [loggedIn, setLoggedIn] = useState(false)
    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState(false)
    return (
        <div className="App">
            <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
                <CartContext.Provider value={{cart, setCart}}>
                    <Container>
                        <Header/>
                        {alert && <Alert color="success">
                            User is successfully logged in!
                        </Alert>}
                        <div className={'main'}>
                            <Search books={books} setBooks={setBooks}/>
                            <Sort sortBy={sortBy} setSortBy={setSortBy}/>
                        </div>
                        <BookCard books={books} sortBy={sortBy} setAlert={setAlert}/>
                    </Container>
                </CartContext.Provider>
            </LoginContext.Provider>
        </div>
    );
}

export default App;
