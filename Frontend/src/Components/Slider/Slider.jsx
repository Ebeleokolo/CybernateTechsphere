import React, { useState } from "react";
import homemainimage1 from "../../assets/images/homemainimage1.svg";
import homemainimage2 from "../../assets/images/homemainimage2.svg";
import blackdotbutton from "../../assets/images/blackdotbutton.svg";
import whitedotbutton from "../../assets/images/whitedotbutton.svg";
import pausebutton from "../../assets/images/pausebutton.svg";
import rightarrow from "../../assets/images/nextbutton.png";
import previousbutton from "../../assets/images/previousbutton.svg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: homemainimage1,
      text1: [
        "Crafting Innovative",
        "Technology Solutions",
        "for a Seamless Future",
      ],
      text2: [
        "Pioneering progress; we are dedicated to",
        "crafting innovative technology solutions to",
        "seamlessly shape a future of limitless possibilities",
      ],
    },
    {
      img: homemainimage2,
      text1: [
        "Revolutionizing",
        "Tech Landscapes",
        "with transformational Solutions",
      ],
      text2: [
        "Delivering transformational solutions that",
        "redefine the way processes unfold, ensuring",
        "efficiency, adaptability, and unparalleled progress",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="flex flex-col h-[70vh] w-[100%]">
      <div className="flex w-[100%]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex w-[100%] ${
              currentIndex === index ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col justify-center items-center w-[50%] h-full bg-gray-100">
              <div className="flex flex-col items-center text-center mb-4 w-[50%] leading-[35px]">
                {slide.text1.map((line, idx) => (
                  <p
                    key={idx}
                    className={`${
                      idx === 1
                        ? " text-[25px] text-mainblue font-600"
                        : "font-medium text-[20px]"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-center text-center mb-4 w-[80%] leading-[28px] font-medium text-[20px]">
                {slide.text2.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <div className="slider-engage-btn bg-mainblue w-[30%] h-[7%] mt-3 rounded-md">
                <a
                  href="#"
                  className="flex justify-center items-center h-full w-full text-white"
                >
                  Engage With Us
                </a>
              </div>
            </div>
            <div className="w-[70%] h-full">
              <img
                src={slide.img}
                alt="slider image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center gap-2 mt-4">
        <button onClick={stop} className=" text-white px-4 py-2 rounded ">
          <img src={pausebutton} alt="Previous" />
        </button>
        <button onClick={prevSlide} className=" text-white px-4 py-2 rounded ">
          <img src={previousbutton} alt="Previous" />
        </button>
        <button onClick={nextSlide} className=" text-white px-4 py-2 rounded ">
          <img src={rightarrow} alt="Next" />
        </button>
        <button onClick={prevSlide} className=" px-4 py-2 rounded">
          <img src={whitedotbutton} alt="White Dot" />
        </button>
        <button onClick={nextSlide} className=" text-white px-4 py-2 rounded ">
          <img src={blackdotbutton} alt="Black Dot" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
