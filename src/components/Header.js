import React, {useContext} from 'react';
import {BiCart} from 'react-icons/bi'
import {Badge} from "../predefined-component";
import CartContext from "./CartContext";

export const Header = () => {
    const {cart} = useContext(CartContext);
    return (
        <div className={'header'}>
            <h2>e-Library</h2>
            <div>
                <BiCart className={'cart_icon'}/>
                {cart.length > 0 && <Badge color="secondary">{cart.length}</Badge>}
            </div>

        </div>

        
    )
}
