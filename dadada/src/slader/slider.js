import "./slider..css";
import Flickity from 'react-flickity-component'
import "./flickity.css";
import slide_1 from "../../src/Img/slide_1.JPG";
import slide_2 from "../../src/Img/slide_2.jpg";
import slide_3 from "../../src/Img/slider_3.jpg";
import slide_4 from "../../src/Img/slider_4.jpg";
import slide_5 from "../../src/Img/slider_4.jpg";


const flickityOptions = {
  initialIndex: 2,
};

const coffeeSlider = {
  id: [1, 2, 3, 4, 5],
  title: ["Наши фирменные стрипсы", "Бургеры с курицей", "Сладкая курочка", "Множество закусок", ],
  images: [slide_1, slide_2, slide_3, slide_4],
};

export default function ScrollElem() {
  return (
    <Flickity
      className="slider _content"
      elementType="div"
      disableImagesLoaded={false}
      options={flickityOptions}
      reloadOnUpdate
      static
    >
      {coffeeSlider.id.map((index) => {
        return (
          <div key={index} className="elemCoffe">
            <div
              style={{
                backgroundImage: `url(${coffeeSlider.images[index - 1]})`,
              }}
              className="imgScrollElem"
            >
              <div className="textContainer">
                <h2 className="scrollName">{coffeeSlider.title[index - 1]}</h2>
                <h1 className="titleScrlolElemMenu">В сети ресторанов LOS POLLOS</h1>
                <h3 className="title2ScrolElemMenu">
                  Попробуйте все наши позиции!
                </h3>
                <a href="#" className="btnShop">
                  Купить
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Flickity>
  );
}