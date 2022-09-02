import { HeroBanner, FooterBanner, Product } from "../components";
import { client } from "../library/client";


const Home = ({productsData, bannerData}) => {
 
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0] }/>
      <div>
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container">
          {productsData?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
      <FooterBanner footerBanner = {bannerData && bannerData[0]}/>
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const productsData = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {productsData, bannerData}
  }
};

export default Home;
