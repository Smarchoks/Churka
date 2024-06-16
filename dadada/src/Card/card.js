// import "./card.css";

// //  import telega from "../Img/pogo.jpg"

// const wares = [
//   {
//     img: telega,
//     Title: "telega",
//     Price: 570,
//   },
// ];

// const generCards = wares.map((element) => {
//   return <telega element={element} />;
// });

// function telega({ element }) {
//   return (
//     <div className="block_card">
//       <img className="chicken" src={element.img} />
//       <h2 className="text_chicken">{element.Title}</h2>
//       <p className="price_chicken">{element.Price}</p>
//       <btn className="btn_chicken">Добавить в корзину</btn>
//     </div>
//   );
// }

// export default function Card() {
//   return (
//     <div className="container_best">
//       <p>CARDS</p>
//       <div className="card_block_chicken">{generCards}</div>
//     </div>
//   );
// }


import "./card.css";
import telega from "../Img/pogo11.png";

const LosposCard = ({ war }) => (
  <div className="block_card">
    <img className="chicken" src={war.image} alt="gf" />
    <h2 className="text_chicken">{war.Title}</h2>
    <p className="price_chicken">{war.Price}</p>
    <btn className="btn_chicken">Добавить в корзину</btn>
  </div>
);

const lospolosList = () => {
  const wares = [
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
          <LosposCard war={war} />
        </div>
      ))}
    </div>
  );
};

export default lospolosList;