import React from "react";
import consultancyimg from "../../assets/images/consultancyimg.svg";
import solutionsimg from "../../assets/images/solutionsimg.svg";
import ellipse from "../../assets/images/Ellipse.svg";

const Solutions = () => {
  return (
    <div className=" flex flex-col bg-[#a5b0d51a] mt-2 ">
      <h2 className="self-center text-mainblue mt-5 mb-5 font-600 font-poppins text-31px text-bold">
        SERVICED INDUSTRIES
      </h2>
      <div className="flex flex-col">
        <div className=" w-[900px] self-center">
          Catering to a diverse array of industries, Cybernate Techsphere offers
          tailored technology solutions designed to meet the unique needs of
          each sector. From government and finance to healthcare, retail,
          education, manufacturing, and beyond, our expertise spans a wide
          spectrum, empowering businesses with innovative solutions that drive
          success in today's dynamic digital landscape.
        </div>
        <div className=" mt-3 w-[600px] h-[200px] border-3 flex  flex-col gap-4 justify-center items-center self-center bg-gray-greenishblue">
          <div className="relative flex justify-center items-center">
            <img src={ellipse} className="w-16 h-16" />
            <img src={consultancyimg} className="absolute w-8 h-8" />
          </div>
          <span>
            <h2 className="text-white font-poppins text-30px">Consultancy</h2>
          </span>
        </div>
      </div>

      <div className="border-t border-gray-300 my-4"></div>

      <div className="flex flex-col mt-3">
        <div className="flex flex-col self-center">
          <h2 className="self-center text-mainblue font-poppins text-700 text-31px">
            OUR SOLUTIONS:
          </h2>
          <div className="w-[900px] self-center">
            We tailor our IT solutions to meet the unique needs and challenges
            of your industry. By understanding the intricacies of your sector,
            we deploy industry-specific solutions and best practices to manage
            your IT infrastructure effectively. Our approach involves thorough
            analysis, strategic planning, and proactive management to ensure
            optimal performance, security, and compliance within your industry's
            regulatory framework. Whether you're in finance, healthcare, retail,
            or any other sector, our dedicated team is equipped to deliver
            tailored IT services that drive success in your industry.
          </div>
          <div className=" w-[900px] border-3 flex justify-center items-center self-center bg-gray-slategray">
            <img src={solutionsimg} className=" self-center mt-3" />
          </div>
        </div>

        <div className=" mt-5 w-[900px] self-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-mainblue">
                Digital Transformation Solutions:
              </span>
              <span>
                Implementing emerging technologies Optimizing business processes
                Enhancing customer experiences
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-mainblue">
                Infrastructure Optimization Solutions:
              </span>
              <span>
                IT infrastructure assessment and optimization Network design and
                optimization Virtualization and consolidation
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-mainblue">
                Data Analytics Solutions:
              </span>
              <span>
                Big data analytics Predictive analytics Business intelligence
                and reporting
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;