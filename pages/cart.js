import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";

export default function CartPage() {
  const { cart, dispatch, total } = useCart();
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="main-container">
        <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 20 }}>
          Your Cart
        </h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img className="cart-img" src={item.image} alt={item.title} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <span style={{ fontSize: "0.92em" }}>${item.price}</span>
                </div>
                <div className="cart-actions">
                  <button
                    className="btn btn-outline"
                    onClick={() => dispatch({ type: "DECREASE", id: item.id })}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="btn btn-outline"
                    onClick={() => dispatch({ type: "INCREASE", id: item.id })}
                  >
                    +
                  </button>
                </div>
                <button
                  className="cart-remove"
                  onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-summary">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div style={{ textAlign: "right" }}>
              <button
                className="btn"
                style={{ fontSize: "1.07em" }}
                onClick={() => router.push("/checkout")}
                disabled={cart.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
