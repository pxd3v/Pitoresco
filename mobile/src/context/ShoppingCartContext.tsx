import React, { createContext, useState } from 'react';

interface Add {
  addId: string;
  price: number;
  amount: number; 
  name: string;
}

interface CartItem {
  id: number;
  itemId: string;
  amount: number;
  adds: Add[]
  total: number;
  name: string;
  imageUrl: string;
  obs: string;
  price: number;
}


interface NewCartItem {
  itemId: string;
  amount: number;
  adds: Add[]
  total: number;
  name: string;
  imageUrl: string;
  obs: string;
  price: string;
}

export interface ShoppingCartContextData {
    cartItems: CartItem[];
    addItem: (cartItem: NewCartItem) => void;
    removeItem: (id: number) => void;
    getTotalValue: () => number;
}

const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData
);

const ShoppingCartProvider: React.FC = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [id, setId] = useState(0);

    const addItem = (cartItem: NewCartItem) => {
        setId(id + 1);
        setCartItems((cartItems) => [...cartItems, {...cartItem, id}]);
        console.log('cartItem:', cartItem, 'parsed:', {...cartItem, id});
    };

    const removeItem = (id: number) => {
        setCartItems((cartItems) => cartItems.splice(cartItems.map((cartItem) => cartItem.id).indexOf(id), 1));
    };

    const getTotalValue = () => {
        return cartItems.map((cartItem) => cartItem.total).reduce((total, price) => total + price);
    };

    return (
        <ShoppingCartContext.Provider
            value={{ cartItems, addItem, removeItem, getTotalValue }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};

export { ShoppingCartProvider, ShoppingCartContext };
