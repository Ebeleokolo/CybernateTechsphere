import React from "react";
import itconsulting from "../../assets/images/itconsulting.svg";
import itprojectmanagement from "../../assets/images/itprojectmanagement.svg";
import businessintelligence from "../../assets/images/businessintelimg.svg";
import cybersecurity from "../../assets/images/cybersecurity.svg";
import cloudcomputing from "../../assets/images/cloudcomputing.svg";
import ittraining from "../../assets/images/ittraining.svg";
import remoteit from "../../assets/images/remoteit.svg";
import mobileapp from "../../assets/images/mobileapp.svg";

const Services = () => {
  return (
    <div className="flex flex-col p-5 bg-gray-200 ">
      <h2 className="service-title flex self-center mb-4 mt-4 text-mainblue font-poppins font-600 text-31px">
        CYBERNATE SERVICES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="service-card flex flex-col items-center text-center bg-white border-2 rounded-lg p-4">
          <div className="w-15 border-2 border-black rounded-full overflow-hidden mb-4 p-1 ">
            <img src={itconsulting} className=" w-full h-full object-cover" />
          </div>
          <h3 className="service-name mb-2">IT CONSULTING</h3>
          <p className="service-description">
            IT Consulting is our forte, where expertise meets innovation. We
            offer strategic guidance and tailored solutions to optimize your IT
            landscape, aligning technology with your business objectives. Our
            seasoned consultants bring a wealth of knowledge to navigate
            challenges, ensuring your IT strategy is not just a solution but a
            catalyst for success.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center bg-white border-2 rounded-lg p-4">
          <div className="w-15 border-2 border-black rounded-full overflow-hidden mb-4 p-1 ">
            <img
              src={itprojectmanagement}
              className=" w-full h-full object-cover"
            />
          </div>

          <h3 className="service-name mb-2">IT Project Management</h3>
          <p className="service-description">
            From conception to execution, we meticulously plan, organize, and
            oversee every project, ensuring seamless coordination, timely
            delivery, and alignment with your business goals. Trust us to
            navigate the complexities, turning your vision into reality with
            precision and expertise.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center bg-white border-2 rounded-lg p-4">
          <div className="w-15 border-2 border-black rounded-full overflow-hidden mb-4 p-1 ">
            <img
              src={businessintelligence}
              className=" w-full h-full object-cover"
            />
          </div>

          <h3 className="service-name mb-2">
            Business Intelligence and Analytics
          </h3>
          <p className="service-description">
            Empower your business decisions with our Business Intelligence and
            Analytics solutions, transforming raw data into actionable insights.
            Leverage the power of analytics to enhance strategic planning,
            optimize operations, and drive sustainable growth in today's dynamic
            business landscape.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center bg-white border-2 rounded-lg p-4">
          <div className="w-15 border-2 border-black rounded-full overflow-hidden mb-4 p-1 ">
            <img src={cybersecurity} className=" w-full h-full object-cover" />
          </div>

          <h3 className="service-name mb-2">
            Cybersecurity and Networking Solutions
          </h3>
          <p className="service-description">
            Our specialization lies in securing systems and networks, employing
            advanced technologies to shield data from potential threats. From
            robust defense mechanisms to seamless network architecture, we
            ensure the comprehensive protection of your systems and data,
            providing peace of mind in an ever-evolving technological
            environment.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center bg-white border-2 rounded-lg p-4">
          <div className="w-15 border-2 border-black rounded-full overflow-hidden mb-4 p-1 ">
            <img src={cloudcomputing} className=" w-full h-full object-cover" />
          </div>

          <h3 className="service-name mb-2">Cloud Computing Services</h3>
          <p className="service-description">
            Elevate your business to new heights as we seamlessly transition and
            manage your operations in the cloud. Experience the power of
            on-demand resources, optimal performance, and enhanced
            collaboration, all tailored to meet the evolving needs of your
            digital journey.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center bg-white border-2 rounded-lg p-4">
          <div className="w-15 h-15 border-2 border-black rounded-full overflow-hidden mb-4  ">
            <img src={ittraining} className=" w-[50px] h-full object-cover" />
          </div>
          <h3 className="service-name mb-2">IT Training and Support</h3>
          <p className="service-description">
            Our IT Training and Support services ensure a seamless integration
            of technology into your workflow. From personalized training
            sessions to responsive support, we are dedicated to enhancing your
            team's proficiency, resolving challenges, and fostering a culture of
            continuous improvement in the rapidly evolving IT landscape.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center bg-white border-2 rounded-lg p-4">
          <div className="w-15  border-2 border-black rounded-full overflow-hidden mb-4 p-1 item-center flex">
            <img src={remoteit} className="w-full h-full object-cover" />
          </div>
          <h3 className="service-name mb-2">Remote IT Support</h3>
          <p className="service-description">
            Our dedicated IT Support team is ready to assist you remotely,
            providing swift and efficient solutions to your technical
            challenges. Whether troubleshooting issues, conducting updates, or
            offering expert guidance, our remote support ensures your IT
            infrastructure runs smoothly, no matter where you are.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center bg-white border-2 rounded-lg p-4">
          <div className="w-15 border-2 border-black rounded-full overflow-hidden mb-4 p-1 ">
            <img src={mobileapp} className=" w-full h-full object-cover" />
          </div>
          <h3 className="service-name mb-2">
            Mobile Applications And Software Development
          </h3>
          <p className="service-description">
            We transform your ideas into reality by crafting dynamic mobile apps
            and robust software solutions, tailored to your business needs,
            using expertise, creativity, and cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
