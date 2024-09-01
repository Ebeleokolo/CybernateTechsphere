import React from 'react';
import './Slider.css';
import homemainimage1 from '../../assets/images/homemainimage1.svg';
import homemainimage2 from '../../assets/images/homemainimage2.svg';

const Slider = () => {
  return (
    <section className="slider-container">
            <div className="slider-slide">
                <div className="slider-item slider-item1">
                    <img src={homemainimage1} alt="slider image" className="slider-main-image" />
                    <div class="slider-main-image-text1">
                        <p>Crafting Innovative </p>
                        <p>Technology Solutions</p>
                        <p>for a Seamless Future</p>
                    </div>
                    <p className="slider-caption">
                        Pioneering progress; we are dedicated to <br/><br/>
                        crafting innovative technology solutions to<br/><br/>
                        seamlessly shape a future of limitless<br/><br/>
                        possibilities
                    </p>
                    <div className="slider-engage-btn-container">
                        <a href="#" className="slider-engage-btn">Engage With Us</a>
                    </div>
                </div>

                <div className="slider-item slider-item2">
                    <img src={homemainimage2} alt="slider image" className="slider-main-image"/>
                    <div className="slider-main-image-text2">
                        <p>Revolutionizing</p>
                        <p>Tech Landscapes</p>
                        <p>with transformational Solutions </p>
                    </div>
                    <p className="slider-caption">
                        Delivering transformational solutions that<br/><br/>
                        redefine the way processes unfold, ensuring <br/><br/>Name
                        efficiency, adaptability, and unparalleled<br/><br/>
                        progress
                    </p>
                    <div className="slider-engage-btn-container">
                        <a href="#" class="slider-engage-btn">Engage With Us</a>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default Slider