import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((a, c) => a + c.qty, 0);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar__brand">
        FakeStore
      </Link>
      <div className="navbar__links" style={{ position: "relative" }}>
        <Link href="/products">Products</Link>
        <span style={{ position: "relative", display: "inline-block" }}>
          <Link href="/cart" style={{ fontSize: "1.35em" }}>
            🛒
          </Link>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </span>
      </div>
    </nav>
  );
}
