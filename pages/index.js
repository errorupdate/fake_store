import Navbar from "../components/Navbar";
import HomeCards from "../components/HomeCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <div className="home-heading">
          <h1>Welcome to FakeStore!</h1>
          <p>Modern responsive e-commerce demo built with Next.js and CSS.</p>
        </div>
        <HomeCards />
      </main>
    </>
  );
}
