import React, { useState, useEffect, useCallback } from "react";
import homemainimage1 from "../../assets/images/homemainimage1.svg";
import homemainimage2 from "../../assets/images/homemainimage2.svg";
import blackdotbutton from "../../assets/images/blackdotbutton.svg";
import whitedotbutton from "../../assets/images/whitedotbutton.svg";
import pausebutton from "../../assets/images/pausebutton.svg";
import rightarrow from "../../assets/images/nextbutton.png";
import previousbutton from "../../assets/images/previousbutton.svg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      img: homemainimage1,
      text1: "Crafting Innovative",
      text2: <strong>Technology Solutions</strong>,
      text3: "for a Seamless Future",
      description: "Pioneering progress; we are dedicated to crafting innovative technology solutions to seamlessly shape a future of limitless possibilities.",
    },
    {
      img: homemainimage2,
      text1: "Revolutionizing",
      text2: <strong>Technology Solutions</strong>,
      text3: "with transformational Solutions",
      description: "Delivering transformational solutions that redefine the way processes unfold, ensuring efficiency, adaptability, and unparalleled progress.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, nextSlide]);

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col h-[80vh] w-full">
        <div className="flex w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex w-full h-full ${
                currentIndex === index ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col justify-center items-center w-[40%] bg-[#f0f1fc] px-16">
                <div className="flex flex-col items-center mb-8 space-y-1 text-center">
                  <p className="text-xl font-light">{slide.text1}</p>
                  <p className="text-3xl text-[#1e3a8a] font-black">{slide.text2}</p>
                  <p className="text-xl font-light">{slide.text3}</p>
                </div>
                <p className="text-base leading-relaxed text-center mb-8 max-w-lg">
                  {slide.description}
                </p>
                <button className="bg-[#1e3a8a] text-white px-8 py-2.5 rounded">
                  Engage With Us
                </button>
              </div>
              <div className="w-[60%] h-full">
                <img
                  src={slide.img}
                  alt="slider image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center items-center space-x-3 py-4">
        <button 
          onClick={togglePlay} 
          className={`hover:opacity-80 transition-transform ${
            isPlaying ? 'animate-pulse' : ''
          }`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <img 
            src={pausebutton} 
            alt="" 
            className={`w-4 h-4 ${
              isPlaying ? 'scale-110' : 'scale-100'
            }`}
          />
        </button>
        <button 
          onClick={prevSlide} 
          className="hover:opacity-80"
          aria-label="Previous slide"
        >
          <img src={previousbutton} alt="" className="w-4 h-4" />
        </button>
        {slides.map((_, idx) => (
          <img
            key={idx}
            src={currentIndex === idx ? blackdotbutton : whitedotbutton}
            alt=""
            className="w-2 h-2"
          />
        ))}
        <button 
          onClick={nextSlide} 
          className="hover:opacity-80"
          aria-label="Next slide"
        >
          <img src={rightarrow} alt="" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Slider;