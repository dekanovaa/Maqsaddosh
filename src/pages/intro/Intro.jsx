import React from "react";
import Header from "../../components/header/Header";
import "./Intro.css";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import { useNavigate } from "react-router-dom";

function Intro() {
    const navigate = useNavigate();
  const slides = [
    { id: 1, text: "Katta maqsadlar maqsaddoshlar bilan.", image: slide1 },
    { id: 2, text: "O'zingizga mos maqsaddosh toping.", image: slide2 },
    { id: 3, text: "Birgalikda yanada samarali bo'ling.", image: slide3 },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      navigate("/welcome");
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="intro">
      <Header />
      <div className="intro-container">
        <div className="slider-container">
          <div className="slides">
            <div
              className="slides-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="slide">
                  <div className="text">
                  <p className="slide-text">{slide.text}</p>
                  </div>
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    style={{
                      width:
                        slide.id === 1
                          ? "231px"
                          : slide.id === 2
                          ? "250px"
                          : "164px",
                      height:
                        slide.id === 1
                          ? "264px"
                          : slide.id === 2
                          ? "280px"
                          : "268px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pagination">
            {slides.map((_, index) => (
              <span
                key={index}
                className={currentSlide === index ? "active" : ""}
              ></span>
            ))}
          </div>

          <div className="next">
            <button onClick={nextSlide} className="next-btn">
              Keyingi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
