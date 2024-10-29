import React from "react";
import freshguy from "../../assets/images/freshguyimage.svg";
import goodmark from "../../assets/images/goodmark.svg";
import whitemessage from "../../assets/images/whitemessageimg.svg";
import phoneimage from "../../assets/images/phoneimage.svg";

const Contact = () => {
  return (
    <div className="flex  mt-4 bg-gray-slategrey">
      <div className="h-[45rem] w-[60%] bg-gray-extralight">
        <img src={freshguy} className="h-full w-full object-cover" />
      </div>

      <div className="discussion-container  flex flex-col justify-center items-center gap-3">
        <h1 className="font-poppins font-normal text-[32px] text-navyblue leading-[64px] text-left mb-2">
          READY FOR A DISCUSSION?
        </h1>

        <p className="mb-2 text-[24px] w-[80%] text-navyblue">
          Share insights about your business, and we'll be prepared to offer
          solutions on:
        </p>
        <div className="bg-gray-100 p-4 rounded-md text-navyblue">
          {[
            "Business challenges and objectives",
            "Current pain points or inefficiencies",
            "Desired outcomes or goals",
            "Potential solutions or strategies",
            "Timeline and budget considerations",
            "Current technology landscape",
            "Enhancing quality and customer experience",
          ].map((text, index) => (
            <div key={index} className="flex items-center mb-2">
              <img src={goodmark} className=" mr-2" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-5 mt-7">
          <button className="flex gap-2 items-center justify-center bg-mainblue  w-[140px] h-[70px]">
            <img src={whitemessage} />
            <div className="flex flex-col">
              <span className="text-xl">Inquiries</span>
              <span className="text-sm">[email]</span>
            </div>
          </button>

          <button className="flex flex-col p-2  bg-white  w-[140px] h-[70px]">
            <div className="flex justify-around g-2">
              <img src={phoneimage} />
              <span className="text-xl">Instant Call</span>
            </div>
            <span className="text-sm mt-2">(123) 456-7890</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
