import { client, library, urlFor } from "../../library/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFilterStar,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "../../components/Product";
import { useState } from "react";
import { useStateContext } from "../../State/Context";


const ProductDetails = ({ product, products }) => {
  // console.log(product)
  const { name, image, details, price } = product;
  const [imageIndex, setImageIndex] = useState(0);
  const { qty, incQty, decQty, onAdd } = useStateContext();
  return (
    <div>
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={urlFor(image && image[imageIndex])} className="product-detail-image" />
        </div>
        <div className="small-images-container">
          {image?.map((item, i) => (
            <img 
              key={i}
              src={urlFor(item)}
              className={i === imageIndex ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setImageIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{name}</h1>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            (20)
          </p>
        </div>
        <h4>Details: </h4>
        <p>{details}</p>
        <p className="price">${price}</p>
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
          </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
          <button type="button" className="buy-now" onClick=''>Buy Now</button>
        </div>
      </div>
    </div>

    <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
    </div>
  </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  console.log(products);
  return {
    props: { products, product },
  };
};

export default ProductDetails;
