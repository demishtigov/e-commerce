import Link from "next/link";
import { urlFor } from "../library/client";

const Product = ({product :{image, name, price, slug}}) => {
  
  return <>
    <Link href={`/product/${slug.current}`}>
      <div className="product-card">
        <img
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          className="product-image"
        />
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>
    </Link>
  </>;
};

export default Product;
