import React from 'react';
import './Slider.css';
import homemainimage1 from '../../assets/images/homemainimage1.svg';
import homemainimage2 from '../../assets/images/homemainimage2.svg';

const Slider = () => {
    return (
        <section className="slider-container">

            <div className="first-slide slider-item">
                <div className="first-slide-text">
                    <div class="first-slide-text1">
                        <p>Crafting Innovative </p>
                        <p>Technology Solutions</p>
                        <p>for a Seamless Future</p>
                    </div>
                    <div className="first-slide-text2">
                        <p>Pioneering progress; we are dedicated to </p>
                        <p> crafting innovative technology solutions to</p>
                        <p>seamlessly shape a future of limitless possibilities</p>
                    </div>
                    <div className="slider-engage-btn">
                        <a href="#">Engage With Us</a>
                    </div>
                </div>

                <div className="first-slide-image">
                    <img src={homemainimage1} alt="slider image" />
                </div>
            </div>


            <div className="second-slide slider-item">
                <div className="second-slide-text">
                    <div className="second-slide-text1">
                        <p>Revolutionizing</p>
                        <p>Tech Landscapes</p>
                        <p>with transformational Solutions</p>
                    </div>
                    <p className="second-slide-text2">
                        <p> Delivering transformational solutions that</p>
                        <p>redefine the way processes unfold, ensuring</p>
                        <p>efficiency, adaptability, and unparalleled progress</p>
                    </p>
                    <div className="slider-engage-btn">
                        <a href="#">Engage With Us</a>
                    </div>
                </div>

                <div className="second-slide-image">
                    <img src={homemainimage2} alt="slider image" />
                </div>
            </div>
        </section>
    )
}

export default Slider