export default function ProductCard({ product, onAdd, onView }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-title">{product.title}</div>
      <div className="card-price">${product.price}</div>
      <div className="card-btns">
        <button className="btn" onClick={() => onAdd(product)}>
          Add to Cart
        </button>
        <button className="btn btn-outline" onClick={() => onView(product.id)}>
          View
        </button>
      </div>
    </div>
  );
}
