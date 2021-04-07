import React, {useContext, useState} from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "../predefined-component";
import LoginContext from "./LoginContext";
import CartContext from "./CartContext";

const LoginModal = ({book, buttonLabel, className, setAlert}) => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const {cart, setCart} = useContext(CartContext);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const isBookPresent = cart.find(cartItem => cartItem.name === book.name);

    const loginHandler = () => {
        setLoggedIn(true);
        setCart(prevCart => {
            return [...prevCart,book]
        })
        setAlert(true);
        setTimeout(() => setAlert(false), 2000)
        toggle();
    }

    const addToCartHandler = () => {
        if(!loggedIn){
          toggle();
        } else {
            setCart(prevCart => {
                return [...prevCart,book]
            })
        }
    };
    const removeFromCartHandler = () => {
       const newCart = cart.filter(cartItem => cartItem.name !== book.name);
       setCart(newCart);
    };

    return (
        <div>
            {isBookPresent ? (<Button className={'add_cart_btn'} color="danger" onClick={removeFromCartHandler}>{'Remove'}</Button>) :
                (<Button className={'add_cart_btn'} color="danger" onClick={addToCartHandler}>{buttonLabel}</Button>)}

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Sign In</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={loginHandler}>Login</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default LoginModal;