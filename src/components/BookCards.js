import React from 'react';
import '../styles/components/bookcard.scss'
import moment from "moment";
import Cards from "./Cards";
import {CardGroup, Col} from "../predefined-component";

const BookCards = ({books, sortBy, setAlert}) => {


    if (sortBy === 'Sort By Date') {
        return <Col sm={{size: 'auto', offset: 1}}>
            <CardGroup>{books.sort((book1, book2) => {
                const date1 = moment(book1.publishDate, "DD/MM/YYYY").toDate();
                const date2 = moment(book2.publishDate, "DD/MM/YYYY").toDate();
                return date1 - date2;
            }).map((book) => <Cards book={book} setAlert={setAlert}/>)}</CardGroup>
        </Col>

    } else if (sortBy === 'Sort By Duration') {
        return <Col sm={{size: 'auto', offset: 1}}>
            <CardGroup>{
                books
                    .sort((book1, book2) => book1.duration.localeCompare(book2.duration)).map((book) => <Cards
                    book={book} setAlert={setAlert}/>)
            }</CardGroup>
        </Col>
    } else {
        return <Col>
            <CardGroup>{books.map((book) => <Cards book={book} setAlert={setAlert}/>)}</CardGroup>
        </Col>
    }
};

export default BookCards;