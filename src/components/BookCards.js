import React from 'react';
import '../styles/components/bookcard.scss'
import moment from "moment";
import Cards from "./Cards";

const BookCards = ({books, sortBy, setAlert}) => {

    if (sortBy === 'Sort By Date') {
        return <div className={"col"}>{books.sort((book1, book2) => {
            const date1 = moment(book1.publishDate, "DD/MM/YYYY").toDate();
            const date2 = moment(book2.publishDate, "DD/MM/YYYY").toDate();
            return date1 - date2;
        }).map((book) => <Cards key={book.name} book={book} setAlert={setAlert}/>)}</div>

    } else if (sortBy === 'Sort By Duration') {
        return <div className={"col"}>{
            books
                .sort((book1, book2) => book1.duration.localeCompare(book2.duration)).map((book) => <Cards
                key={book.name} book={book} setAlert={setAlert}/>)
        }</div>
    } else {
        return <div className={"col"}>
            {books.map((book) => <Cards key={book.name} book={book} setAlert={setAlert}/>)}
        </div>
    }

};

export default BookCards;