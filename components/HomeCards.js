// components/HomeCards.js

const homeCards = [
  {
    id: 1,
    title: "Electronics",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Jewelry",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 3,
    title: "Men's Clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    title: "Women's Clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 5,
    title: "Accessories",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
];

export default function HomeCards() {
  return (
    <section className="home-card-section">
      <div className="card-grid">
        {homeCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
