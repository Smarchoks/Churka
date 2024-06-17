import "./history.css";

import gus from "../Img/fff.jpg";
import kisti from "../Img/cms-bg-pattern.png";

export default function Header() {
  return (
    <div className="lala">
      <div className="container_history">
        <div className="block_history">
          <ul className="block_title">
            <li className="title_history_1">История</li>
            <li className="title_history_2">Нашего ресторана</li>
          </ul>
          <p className="text_history">
            LOS POLLOS - это не просто закусочная, это легенда вкуса и качества,
            которая начала свой путь еще в далекие времена. Здесь каждый кусочек
            курицы пропитан заботой и традициями, чтобы порадовать ваши вкусовые
            рецепторы и оставить незабываемый вкус в памяти на всю жизнь.
          </p>
        </div>
        <div className="photo_gus">
          <img src={gus} width={320} />
        </div>
      </div>
      <div className="kisti">
        <img src={kisti} width={1800} />
      </div>
    </div>
  );
}
