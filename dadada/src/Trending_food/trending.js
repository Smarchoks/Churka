import "./trending.css";
import Ture from "../Img/popo.png"

export default function Trending() {
  return <div className="container_trending">
    <div className="title_trending">
        <p className="trending_1">
        Одни из наших
        </p>
        <p className="title_2">
            Популярных блюд
        </p>
        <div className="loo">
        <img src={Ture} width={220} />
      </div>
    </div>
  </div>;
}
