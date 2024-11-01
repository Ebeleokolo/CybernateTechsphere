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
    <div className="flex flex-col p-5 bg-white">
      <h2 className="text-center text-3xl font-semibold text-[#22346E] mb-8"><strong>CYBERNATE SERVICES</strong></h2>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center bg-white">
              <img src={itconsulting} className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-x1 font-medium text-[#22346E] mb-4"><strong>IT Consulting</strong></h3>
          <p className="text-gray-700">IT Consulting is our forte, where expertise meets innovation. We offer strategic guidance and tailored solutions to optimize your IT landscape, aligning technology with your business objectives. Our seasoned consultants bring a wealth of knowledge to navigate challenges, ensuring your IT strategy is not just a solution but a catalyst for success.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center bg-white">
              <img src={itprojectmanagement} className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-[#22346E] mb-4"><strong>IT Project Management</strong></h3>
          <p className="text-gray-700">From conception to execution, we meticulously plan, organize, and oversee every project, ensuring seamless coordination, timely delivery, and alignment with your business goals. Trust us to navigate the complexities, turning your vision into reality with precision and expertise.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center bg-white">
              <img src={businessintelligence} className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-[#22346E] mb-4"><strong>Business Intelligence and Analytics</strong></h3>
          <p className="text-gray-700">Empower your business decisions with our Business Intelligence and Analytics solutions, transforming raw data into actionable insights. Leverage the power of analytics to enhance strategic planning, optimize operations, and drive sustainable growth in today's dynamic business landscape.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center bg-white">
              <img src={cybersecurity} className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-[#22346E] mb-4"><strong>Cybersecurity and Networking Solutions</strong></h3>
          <p className="text-gray-700">Our specialization lies in securing systems and networks, employing advanced technologies to shield data from potential threats. From robust defense mechanisms to seamless network architecture, we ensure the comprehensive protection of your systems and data, providing peace of mind in an ever-evolving technological environment.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center bg-white">
              <img src={cloudcomputing} className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-[#22346E] mb-4"><strong>Cloud Computing Services</strong></h3>
          <p className="text-gray-700">Elevate your business to new heights as we seamlessly transition and manage your operations in the cloud. Experience the power of on-demand resources, optimal performance, and enhanced collaboration, all tailored to meet the evolving needs of your digital journey.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center bg-white">
              <img src={ittraining} className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-[#22346E] mb-4"><strong>IT Training and Support</strong></h3>
          <p className="text-gray-700">Our IT Training and Support services ensure a seamless integration of technology into your workflow. From personalized training sessions to responsive support, we are dedicated to enhancing your team's proficiency, resolving challenges, and fostering a culture of continuous improvement in the rapidly evolving IT landscape.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center bg-white">
              <img src={remoteit} className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-[#22346E] mb-4"><strong>Remote IT Support</strong></h3>
          <p className="text-gray-700">Our dedicated IT Support team is ready to assist you remotely, providing swift and efficient solutions to your technical challenges. Whether troubleshooting issues, conducting updates, or offering expert guidance, our remote support ensures your IT infrastructure runs smoothly, no matter where you are.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center bg-white">
              <img src={mobileapp} className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-[#22346E] mb-4"><strong>Mobile Applications And Software Development</strong></h3>
          <p className="text-gray-700">We transform your ideas into reality by crafting dynamic mobile apps and robust software solutions, tailored to your business needs, using expertise, creativity, and cutting-edge technology.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;