import React, {useEffect, useState} from 'react';
import {Input, InputGroup} from "../predefined-component";
import {booklist} from "../util/booklist";

const Search = ({books, setBooks}) => {
    const [inputValue, setInputValue] = useState('');
    const [booksInit, setBooksInit] = useState(books);

    useEffect(() => {
        inputValue ? setBooks(booksInit.filter((book) => book.name.toLowerCase().includes(inputValue.toLowerCase()))) : setBooks(booklist)
    }, [inputValue])

    return (
        <InputGroup>
            <Input placeholder="Search Book Here" onChange={(e) => setInputValue(e.target.value.trim())} value={inputValue} />
        </InputGroup>
    );
};


export default Search;