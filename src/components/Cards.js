import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "../predefined-component";
import LoginModal from "./LoginModal";


const Cards = ({book, setAlert}) => {

    return (
        <Card className='bookCard'>
            <CardImg className={'bookImage'} top width="25%" src={book.image} alt="Card image cap"/>
            <CardBody>
                <CardTitle tag="h5">{book.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{book.author}</CardSubtitle>
                <CardText>{book.description}</CardText>
                <div>{`Published on - ${book.publishDate}`}</div>
                <div>{`Duration - ${book.duration}`}</div>


            </CardBody>
            <LoginModal buttonLabel={'Add to cart'} book={book} setAlert={setAlert}/>
        </Card>

    );
};

export default Cards;