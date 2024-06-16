import "./basement.css";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Basement() {
  return (
    <div className="container_parent">
    <div className="container_besement">
      <div className="text_basement">
        <p className="mail_text">
          <CiMail />
          ПОДПИШИТЕСЬ НА РАССЫЛКУ НОВОСТЕЙ
        </p>
        <p>
          Зарегистрируйтесь у нас и получайте последние предложения ресторана.
        </p>
      </div>
      <div className="search">
        <input className="search_css" type="email" />
       
      </div>
    </div>
    <div className="container_child">
       <div className="text_container_child">
        ИНФОРМАЦИЯ РЕСТОРАНА
       </div>
       <ul className="header_basement">
        <li className="tetx_header_basement"> <FaLocationDot /> Demo Store
        United States</li>
        <li className="tetx_header_basement"><FaPhoneAlt /> +91 0123456789</li>
        <li className="tetx_header_basement">333</li>
        <li className="tetx_header_basement"><IoMdMail />  demo@gmail.com</li>
       </ul>
    </div>
    </div>
    
  );
}
