import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { useCart } from "../../context/CartContext";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();
  const [notif, setNotif] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        });
    }
  }, [id]);

  function handleAdd(product) {
    dispatch({ type: "ADD", product });
    setNotif("Added to cart!");
    setTimeout(() => setNotif(""), 1200);
  }

  return (
    <>
      <Navbar />
      <Notification message={notif} />
      <main className="main-container" style={{ maxWidth: 500 }}>
        {loading ? (
          <Loader />
        ) : (
          product && (
            <div
              style={{
                background: "#fff",
                borderRadius: 11,
                boxShadow: "0 2px 12px #2223",
                padding: "2em 1.2em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ height: 180, maxWidth: 190, marginBottom: 20 }}
              />
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.4em",
                  marginTop: ".5em",
                }}
              >
                {product.title}
              </div>
              <div
                style={{
                  color: "#1976d2",
                  fontWeight: 700,
                  fontSize: "1.3em",
                  margin: "1em 0",
                }}
              >
                ${product.price}
              </div>
              <p style={{ color: "#444", marginBottom: "1.3em" }}>
                {product.description}
              </p>
              <button className="btn" onClick={() => handleAdd(product)}>
                Add to Cart
              </button>
            </div>
          )
        )}
        {!loading && !product && <div>Product not found.</div>}
      </main>
    </>
  );
}
