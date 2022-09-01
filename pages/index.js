import { HeroBanner, FooterBanner } from "../components";
import { client } from "../library/client";


const Home = () => {
  return (
    <>
      <HeroBanner />
      <div>
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container"></div>
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
