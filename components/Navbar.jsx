import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../State/Context";

const Navbar = () => {
  
  const handleClick = () => {
    setShowCart((prev) => !prev);
  };
  
  const { showCart, setShowCart, totalQty } = useStateContext();
  
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Ka'lo store</Link>
      </p>
      <button type="button" className="cart-icon" onClick={handleClick}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQty}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
