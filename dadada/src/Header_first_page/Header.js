import "./Header.css";
import logo from "../Img/pogo11.png";
import { MdShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className="fixed_white">
    <div className="container_header _content">
      
      <div className="logo_dist">
        <img src={logo} width={120} />
      </div>
      <div className="header_parent">
        <div className="header_child">
          <a href="url">Наша курочка</a>
        </div>
      </div>
      <div className="header_parent">
      <div className="header_child">
        <a href="url">Наша история</a>
      </div>
      </div>
      <div className="header_parent">
      <div className="header_child">
        <a href="url">Подписаться на новости</a>
      </div>
      </div>
      <div className="container_profile">
        <div className="profile">
        <a  className="href_icon"href="url">
        <IoIosSearch />
        <MdShoppingCart/>
        <span className="cart-count">{cart.length}</span>
        </a>
        </div>
        </div>
      
        
      </div>
    </div>
  );
}


