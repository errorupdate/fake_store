import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";

export default function Checkout() {
  const { cart, total, dispatch } = useCart();
  const router = useRouter();

  function handleOrder() {
    dispatch({ type: "CLEAR" });
    alert("Order placed! Thank you for shopping.");
    router.push("/products");
  }

  return (
    <>
      <Navbar />
      <main className="main-container" style={{ maxWidth: 440 }}>
        <h2
          style={{ fontSize: "1.5rem", fontWeight: 800, margin: "1.5em 0 1em" }}
        >
          Checkout
        </h2>
        <div className="cart-list">
          <ul style={{ margin: 0, padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.6em 0",
                  listStyle: "none",
                }}
              >
                <span>
                  {item.title} x {item.qty}
                </span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="cart-summary" style={{ margin: "1em 0 1em" }}>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleOrder}
            className="btn"
            style={{ width: "100%" }}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </div>
      </main>
    </>
  );
}
