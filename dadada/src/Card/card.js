

import "./card.css";
import telega from "../Img/pogo11.png";
import lemon from "../Img/lemon.jpg";
import maslo from "../Img/maslo.jpg";

const LosposCard = ({ war, handleAddToCart }) => (

  <div className="block_card">
    <img className="chicken" src={war.image} alt="gf" />
    <h2 className="text_chicken">{war.Title}</h2>
    <p className="price_chicken">{war.Price}</p>
    <btn className="btn_chicken " onClick={() => handleAddToCart(war)}>Добавить в корзину</btn>
  </div>
);

const lospolosList = () => {
  const wares = [
    {
      image: lemon,
      Title: "telega",
      Price: 570,
    },
    {
      image: maslo,
      Title: "telega",
      Price: 570,
    },
    {
      image: telega,
      Title: "telega",
      Price: 570,
    },
    {
      image: telega,
      Title: "telega",
      Price: 570,
    },
    {
      image: telega,
      Title: "telega",
      Price: 570,
    },
    {
      image: telega,
      Title: "telega",
      Price: 570,
    },
    {
      image: telega,
      Title: "telega",
      Price: 570,
    },
    {
      image: telega,
      Title: "telega",
      Price: 570,
    },
    
  ];

  return (
    <div className="container_best">
      {wares.map((war, index) => (
        <div key={index} className="card_block_chicken">
          <LosposCard war={war} handleAddToCart={(product) => console.log(product)} />
        </div>
      ))}
    </div>
  );
};

export default lospolosList;