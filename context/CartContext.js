import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState =
  typeof window !== "undefined" && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const found = state.find((item) => item.id === action.product.id);
      return found
        ? state.map((item) =>
            item.id === action.product.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state, { ...action.product, qty: 1 }];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "INCREASE":
      return state.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item
      );
    case "DECREASE":
      return state.flatMap((item) =>
        item.id === action.id
          ? item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : []
          : item
      );
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, dispatch, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
