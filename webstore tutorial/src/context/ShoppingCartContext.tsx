import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

// using id here instead of item name allows us to simply look up the name/price info for that item, which allows us to update that info whenever.
//CartItem is used later in an array of CartItem[]
type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // figure out what this means

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0; // find item where the item.id === id, then IF we have the item, return the quantity, otherwise return a default value of 0
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }; // ...item allows us to refer to the item currently looked at by the loop
          } else {
            return item;
          }
        });
      }
    });
  }

  //what is different between adding and removing?
  //if I add an item it can start from 0, or already have an item. either way, it is going to be increased by 1
  //if i remove an item it cannot start from 0 but it can go down to 0.

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id); //Array.filter by item where item.id !== id allows us to return a new array where the item with the current id is filtered out.
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  //value here should contain all method names defined in the ShoppingCartContext type
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
