import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/router";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();
  const [notif, setNotif] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  function handleAdd(product) {
    dispatch({ type: "ADD", product });
    setNotif("Added to cart!");
    setTimeout(() => setNotif(""), 1200);
  }
  function handleView(id) {
    router.push(`/products/${id}`);
  }

  return (
    <>
      <Navbar />
      <Notification message={notif} />
      <main className="main-container">
        <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 15 }}>
          All Products
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={handleAdd}
                onView={handleView}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
